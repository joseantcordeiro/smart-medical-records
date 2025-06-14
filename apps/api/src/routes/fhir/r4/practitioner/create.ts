import { ApiError, openApiErrorResponses } from '@/lib/errors'
import { BaseResourceResponseSchema } from '@/lib/utils/responses'
import { idSchema } from '@/shared/types'
import { createRoute, z } from '@hono/zod-openapi'
import { createPractitionerSchema } from '@solarahealth/fhir-r4'
import { eq } from 'drizzle-orm'

import { practitioner, user } from '@repo/db'

import type { App } from '@/lib/hono'
import type { Practitioner } from '@solarahealth/fhir-r4'

const route = createRoute({
	tags: ['Practitioner'],
	operationId: 'r4-practitioner-create',
	method: 'post',
	path: '/fhir/r4/practitioner',
	security: [{ cookieAuth: [] }],
	request: {
		body: {
			required: true,
			description: 'The practitioner to create',
			content: {
				'application/json': {
					schema: z.object({
						user: idSchema.openapi({
							description: 'The user ID of the practitioner',
						}),
						resource: z.unknown().openapi({
							description: 'The practitioner resource to create',
						}),
					}),
				},
			},
		},
	},
	responses: {
		201: {
			description: 'The practitioner',
			content: {
				'application/json': {
					schema: BaseResourceResponseSchema,
				},
			},
		},
		...openApiErrorResponses,
	},
})

export type Route = typeof route
//export type AssistantCreateRequest = z.infer<
//	(typeof route.request.body.content)['application/json']['schema']
//>
export type PractitionerCreateRequest = z.infer<
	(typeof route.request.body.content)['application/json']['schema']
>

export type PractitionerCreateResponse = z.infer<
	(typeof route.responses)[201]['content']['application/json']['schema']
>

export const registerPractitionerCreate = (app: App) =>
	app.openapi(route, async (c) => {
		const { cerbos, db } = c.get('services')
		const session = c.get('session')

		if (!session)
			throw new ApiError({ code: 'UNAUTHORIZED', message: 'You Need to login first to continue.' })

		const decision = await cerbos.checkResource({
			principal: {
				id: session.session.userId,
				roles: [session.user.role as string],
				attributes: {},
			},
			resource: {
				kind: 'practitioner',
				id: '*',
				attributes: {},
			},
			actions: ['create'],
		})

		if (!decision.isAllowed('create')) {
			throw new ApiError({
				code: 'FORBIDDEN',
				message: 'You do not have permissions to create practitioners.',
			})
		}

		const body = await c.req.json()
		const practitionerSchema = createPractitionerSchema()
		const valid = practitionerSchema.safeParse(body.resource)

		if (!valid.success) {
			throw new ApiError({
				code: 'BAD_REQUEST',
				message: `Invalid practitioner data: ${valid.error.message}`,
			})
		}

		const data: Practitioner = {
			...body.resource,
		}
		console.log('Creating Practitioner with data:', JSON.stringify(data, null, 2))
		const result = await db
			.insert(practitioner)
			.values({
				resource: data,
				user: body.user,
				tenant: session.session.activeOrganizationId as string,
				createdBy: session.session.userId,
				updatedBy: session.session.userId,
			})
			.returning()

		if (result.length < 1)
			throw new ApiError({ code: 'INTERNAL_SERVER_ERROR', message: 'A machine readable error.' })

		const practitionerUser = await db.select().from(user).where(eq(user.id, body.user))

		if (practitionerUser[0].role === 'user') await db.update(user).set({ role: 'practitioner' })

		return c.json(result[0], 201)
	})

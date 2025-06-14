import { ApiError, openApiErrorResponses } from '@/lib/errors'
import { BaseResourceResponseSchema, UserSelectResponseSchema } from '@/lib/utils/responses'
import { idParamsSchema } from '@/shared/types'
import { createRoute, z } from '@hono/zod-openapi'
import { and, eq } from 'drizzle-orm'

import { practitioner, user } from '@repo/db'

import type { App } from '@/lib/hono'

const route = createRoute({
	tags: ['Practitioner'],
	operationId: 'practitioner-find-one',
	method: 'get',
	path: '/fhir/r4/practitioner/{id}',
	security: [{ cookieAuth: [] }],
	request: {
		params: idParamsSchema,
	},
	responses: {
		200: {
			description: 'The practitioner',
			content: {
				'application/json': {
					schema: z.object({
						practitioner: BaseResourceResponseSchema,
						user: UserSelectResponseSchema,
					}),
				},
			},
		},
		...openApiErrorResponses,
	},
})

export type Route = typeof route
export type PractitionerFindOneResponse = z.infer<
	(typeof route.responses)[200]['content']['application/json']['schema']
>

export const registerPractitionerFindOne = (app: App) =>
	app.openapi(route, async (c) => {
		const { cerbos, db } = c.get('services')
		const session = c.get('session')
		const { id } = c.req.valid('param')

		if (!session)
			throw new ApiError({
				code: 'UNAUTHORIZED',
				message: 'You Need to login first to continue.',
			})

		const decision = await cerbos.checkResource({
			principal: {
				id: session.session.userId,
				roles: [session.user.role as string],
				attributes: {},
			},
			resource: {
				kind: 'practitioner',
				id: id,
				attributes: {},
			},
			actions: ['read'],
		})

		if (!decision.isAllowed('read')) {
			throw new ApiError({
				code: 'FORBIDDEN',
				message: 'You do not have permissions to read a practitioner.',
			})
		}

		const tenant = session.session.activeOrganizationId as string

		try {
			const result = await db
				.select()
				.from(practitioner)
				.leftJoin(user, eq(user.id, practitioner.user))
				.where(and(eq(practitioner.tenant, tenant), eq(practitioner.id, id)))

			if (result.length < 1)
				throw new ApiError({
					code: 'NOT_FOUND',
					message: 'Practitioner not found.',
				})

			return c.json(result[0], 200)
		} catch (error) {
			throw new ApiError({
				code: 'INTERNAL_SERVER_ERROR',
				message: `An error occurred while fetching the practitioner. ${error instanceof Error ? error.message : 'Unknown error'}`,
			})
		}
	})

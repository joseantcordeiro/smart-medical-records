import { createRoute, z } from '@hono/zod-openapi'

import { aiClient } from '../../lib/ai/index.js'
import { ApiError, openApiErrorResponses } from '../../lib/errors/index.js'
import { idVectorSchema } from '../../shared/types.js'

import type { App } from '../../lib/hono/index.js'

const route = createRoute({
	tags: ['AI'],
	operationId: 'ai-delete-index',
	method: 'post',
	path: '/ai/delete-index/{id}',
	security: [{ cookieAuth: [] }],
	request: {
		params: idVectorSchema,
		body: {
			required: true,
			description: 'Create Vector Index',
			content: {
				'application/json': {
					schema: z.object({
						indexName: z.string().openapi({
							description: 'The index name.',
							example: 'papers',
						}),
					}),
				},
			},
		},
	},
	responses: {
		200: {
			description: 'The store response',
			content: {
				'application/json': {
					schema: z.object({
						success: z.boolean().openapi({}),
					}),
				},
			},
		},
		...openApiErrorResponses,
	},
})

export type Route = typeof route
export type AiDeleteIndexRequest = z.infer<
	(typeof route.request.body.content)['application/json']['schema']
>
export type AiDeleteIndexResponse = z.infer<
	(typeof route.responses)[200]['content']['application/json']['schema']
>

export const registerAiDeleteIndex = (app: App) =>
	app.openapi(route, async (c) => {
		//const { auth } = c.get('services')
		const session = c.get('session')

		if (!session)
			throw new ApiError({ code: 'UNAUTHORIZED', message: 'You Need to login first to continue.' })

		/**const canCreateAssistant = await auth.api.hasPermission({
      headers: c.req.raw.headers,
      body: {
        permissions: {
          assistant: ['create'], // This must match the structure in your access control
        },
      },
    })

    if (!canCreateAssistant) {
      throw new ApiError({
        code: 'FORBIDDEN',
        message: 'You do not have permissions to create a assistant.',
      })
    } */

		const { id } = c.req.valid('param')
		const data = c.req.valid('json')

		const vectorStore = aiClient.getVector(id)

		try {
			// Create an index for our paper chunks
			const response = await vectorStore.delete(data.indexName)
			//console.log('Response:', response)
			return c.json(response, 200)
		} catch (error) {
			console.error('Development error:', error)
			throw new ApiError({ code: 'INTERNAL_SERVER_ERROR', message: error as string })
		}
	})

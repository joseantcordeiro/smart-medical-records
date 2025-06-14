import { registerCopilotKit } from '@mastra/agui'
import { Mastra } from '@mastra/core/mastra'
import { CloudflareDeployer } from '@mastra/deployer-cloudflare'
import { PinoLogger } from '@mastra/loggers'

import { assistantAgent } from './agents/assistant-agent'
//import { auth } from '@repo/auth'

import { chefAgent } from './agents/chef-agent'
//import { D1Store } from "@mastra/cloudflare-d1";
//import type { D1Database } from "@cloudflare/workers-types";

import { researchAgent } from './agents/research-agent'
import { weatherAgent } from './agents/weather-agent'
import { pgStorage, pgVector } from './stores/pgvector'
import { weatherWorkflow } from './workflows/weather-workflow'

export const mastra = new Mastra({
	deployer: new CloudflareDeployer({
		scope: 'your-account-id',
		projectName: 'smedrec-ai-worker',
		routes: [
			{
				pattern: 'example.com/*',
				zone_name: 'example.com',
				custom_domain: true,
			},
		],
		workerNamespace: 'smedrec-ai-worker',
		auth: {
			apiToken: 'your-api-token',
			apiEmail: 'your-email',
		},
		d1Databases: [
			{
				binding: 'DB',
				database_name: 'smedrec-ai',
				database_id: 'database-id',
			},
		],
		kvNamespaces: [
			{
				binding: 'KV',
				id: 'namespace-id',
			},
		],
	}),
	server: {
		cors: {
			origin: '*',
			allowMethods: ['*'],
			allowHeaders: ['*'],
		},
		middleware: [
			{
				handler: async (c, next) => {
					/**const session = await auth.api.getSession({ headers: c.req.raw.headers })

					if (!session) {
						return new Response('Unauthorized', { status: 401 })
					}
					const authHeader = c.req.header('Authorization')
					if (!authHeader) {
						return new Response('Unauthorized', { status: 401 })
					} */
					await next()
				},
				path: '/api/*',
			},

			async (c, next) => {
				const start = Date.now()
				await next()
				const duration = Date.now() - start
				console.log(
					`${c.req.method} ${c.req.url} - ${duration}ms - Request: ${JSON.stringify(c.req.raw)}}`
				)
			},
		],
		apiRoutes: [
			registerCopilotKit({
				path: '/copilotkit',
				resourceId: 'assistantAgent',
				setContext: (c, runtimeContext) => {
					const { userId, organizationId } = c.req.param()
					// Add whatever you need to the runtimeContext
					runtimeContext.set('user-id', userId)
					runtimeContext.set('organization-id', organizationId)
					//runtimeContext.set('temperature-scale', 'celsius')
				},
			}),
		],
	},
	workflows: { weatherWorkflow },
	agents: { researchAgent, weatherAgent, chefAgent, assistantAgent },
	vectors: { pgVector },
	//storage: new D1Store({
	//  binding: DB, // D1Database binding provided by the Workers runtime
	//  tablePrefix: "dev_", // Optional: isolate tables per environment
	//}),
	storage: pgStorage,
	logger: new PinoLogger({
		name: 'Mastra',
		level: 'info',
	}),
})

// Practitioner routes
import { zEnv } from '@/lib/env'
import { ConsoleLogger } from '@/lib/logs'
import { registerCodeSystemGetAll } from '@/routes/fhir/r4/codesystem/getAll'
import { registerOrganizationUpdate } from '@/routes/fhir/r4/organization/update'
import { registerPractitionerCreate } from '@/routes/fhir/r4/practitioner/create'
import { registerPractitionerDelete } from '@/routes/fhir/r4/practitioner/delete'
import { registerPractitionerFindOne } from '@/routes/fhir/r4/practitioner/findOne'
import { registerPractitionerGetAll } from '@/routes/fhir/r4/practitioner/getAll'
import { registerPractitionerHistoryFindOne } from '@/routes/fhir/r4/practitioner/history/findOne'
import { registerPractitionerHistoryGetAll } from '@/routes/fhir/r4/practitioner/history/getAll'
import { registerPractitionerRecreate } from '@/routes/fhir/r4/practitioner/recreate'
import { registerPractitionerUpdate } from '@/routes/fhir/r4/practitioner/update'
import { registerValueSetGetAll } from '@/routes/fhir/r4/valueset/getAll'
import { cors } from 'hono/cors'

import { auth } from '@repo/auth'

import { newApp } from './lib/hono'
import { init } from './lib/hono/init'
// AI routes
import { registerAiChat } from './routes/ai/chat'
import { registerAiCreateIndex } from './routes/ai/create-index'
import { registerAiDeleteIndex } from './routes/ai/delete-index'
import { registerAiDetailsIndex } from './routes/ai/details-index'
import { registerAiIndexes } from './routes/ai/indexes'
import { registerAiStore } from './routes/ai/store'
// Patient routes
//import { registerPatientsToTherapists } from './routes/fhir/r4/patient/addTherapist'
import { registerPatientCreate } from './routes/fhir/r4/patient/create'
import { registerPatientDelete } from './routes/fhir/r4/patient/delete'
//import { registerPatientsDisableTherapists } from './routes/fhir/r4/patient/disableTherapist'
import { registerPatientFindOne } from './routes/fhir/r4/patient/findOne'
import { registerPatientGetAll } from './routes/fhir/r4/patient/getAll'
import { registerPatientUpdate } from './routes/fhir/r4/patient/update'
import { registerLiveness } from './routes/liveness'
import { registerWhoiam } from './routes/whoiam'

import type { Env } from '@/lib/hono/context'

const app = newApp()

app.use('*', init())

// cors
app.use('*', (c, next) => {
	const corsMiddleware = cors({
		origin: c.env.ALLOWED_ORIGINS == '*' ? '*' : c.env.ALLOWED_ORIGINS.split(','), // replace with your origin
		allowHeaders: ['Content-Type', 'Authorization'],
		allowMethods: ['POST', 'GET', 'PATCH', 'OPTIONS', 'DELETE'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	})
	return corsMiddleware(c, next)
})

/**
 * Mounts Better Auth on all GET and POST requests under `/api/*`.
 * Ensure its `basePath` aligns with this route.
 */
app.on(['GET', 'POST'], '/auth/*', (c) => {
	return auth.handler(c.req.raw)
})

registerLiveness(app)
registerWhoiam(app)

// Practitioner routes
registerPractitionerGetAll(app)
registerPractitionerFindOne(app)
registerPractitionerFindOne(app)
registerPractitionerCreate(app)
registerPractitionerUpdate(app)
registerPractitionerDelete(app)
registerPractitionerRecreate(app)
registerPractitionerHistoryGetAll(app)
registerPractitionerHistoryFindOne(app)
// Patient routes
registerPatientCreate(app)
registerPatientDelete(app)
registerPatientGetAll(app)
registerPatientFindOne(app)
registerPatientUpdate(app)
//registerPatientsToTherapists(app)
//registerPatientsDisableTherapists(app)
// FHIR Organization routes
registerOrganizationUpdate(app)
// ValueSet routes
registerValueSetGetAll(app)
// FHIR CodeSystem routes
registerCodeSystemGetAll(app)
// ai routes
registerAiChat(app)
registerAiStore(app)
registerAiCreateIndex(app)
registerAiDeleteIndex(app)
registerAiDetailsIndex(app)
registerAiIndexes(app)

const handler = {
	fetch: (req: Request, env: Env, executionCtx: ExecutionContext) => {
		const parsedEnv = zEnv.safeParse(env)
		if (!parsedEnv.success) {
			new ConsoleLogger({
				requestId: '',
				environment: env.ENVIRONMENT,
				application: 'api',
			}).fatal(`BAD_ENVIRONMENT: ${parsedEnv.error.message}`)
			return Response.json(
				{
					code: 'BAD_ENVIRONMENT',
					message: 'Some environment variables are missing or are invalid',
					errors: parsedEnv.error,
				},
				{ status: 500 }
			)
		}
		return app.fetch(req, parsedEnv.data, executionCtx)
	},
} satisfies ExportedHandler<Env>

// biome-ignore lint/style/noDefaultExport: Wrangler needs that
export default handler

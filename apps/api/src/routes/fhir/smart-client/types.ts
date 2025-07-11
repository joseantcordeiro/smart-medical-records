import { z } from '@hono/zod-openapi'

export const SmartFhirClientInsertSchema = z
	.object({
		clientId: z.string().openapi({
			description: 'Smart fhir client id',
		}),
		scope: z.string().openapi({
			description: 'The scope.',
			example: 'System/*',
		}),
		iss: z.string().url().openapi({
			description: 'The iss.',
			example: 'https://',
		}),
		fhirBaseUrl: z.string().url().optional().openapi({
			description: 'The FHIR rest api endpoint.',
			example: '',
		}),
		provider: z.enum(['demo', 'azure', 'aws', 'gcp']).openapi({}),
		environment: z.enum(['development', 'production']).openapi({}),
	})
	.openapi('SmartFhirClientInsertSchema')

export const PrivateKeySchema = z
	.object({
		privateKey: z
			.object({
				kty: z.string(),
				n: z.string(),
				e: z.string(),
				d: z.string(),
				p: z.string(),
				q: z.string(),
				dp: z.string(),
				dq: z.string(),
				qi: z.string(),
				ext: z.boolean(),
				kid: z.string(),
				alg: z.string(),
				use: z.string(),
			})
			.openapi({
				description: 'The smart fhir client private key JWT json',
			}),
	})
	.openapi('PrivateKeySchema')

export const AssistantSelectSchema = z
	.object({
		organizationId: z.string().openapi({
			description: 'The organization id',
		}),
		clientId: z.string().openapi({
			description: 'Smart fhir client id',
		}),
		scope: z.string().openapi({
			description: 'The scope.',
			example: 'System/*',
		}),
		iss: z.string().url().openapi({
			description: 'The iss.',
			example: 'https://',
		}),
		fhirBaseUrl: z.string().url().optional().openapi({
			description: 'The FHIR rest api endpoint.',
			example: '',
		}),
		provider: z.enum(['demo', 'azure', 'aws', 'gcp']).openapi({}),
		environment: z.enum(['development', 'production']).openapi({}),
		createdBy: z.string().optional().openapi({}),
		updatedBy: z.string().optional().openapi({}),
		createdAt: z.string().optional().openapi({}),
		updatedAt: z.string().optional().openapi({}),
	})
	.openapi('AssistantSchema')

export const SmartFhirClientPatchSchema = SmartFhirClientInsertSchema.partial()

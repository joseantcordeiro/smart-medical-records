/**
 * Environment Configuration
 *
 * This module handles loading and validating environment variables
 * required for connecting to the FHIR API.
 */

import { AUTHError } from '../utils/errors.js'

/**
 * Retrieves an environment variable.
 * This function attempts to read environment variables from Cloudflare Workers or Node.js process.env.
 * Note: In non-Node.js environments (like Cloudflare Workers), environment variables might be accessed differently (e.g., directly from `env`).
 *
 * @param variableName The name of the environment variable to retrieve.
 * @returns The value of the environment variable if found, otherwise `undefined`.
 */
export function getEnv(variableName: string): string | undefined {
	// Check Cloudflare Workers env
	// @ts-expect-error Hides `Cannot find name 'env'.` when not in CF Worker context.
	if (typeof env !== 'undefined' && env[variableName]) {
		// @ts-expect-error
		return env[variableName]
	}
	// Check Node.js process.env
	if (typeof process !== 'undefined' && process.env && process.env[variableName]) {
		return process.env[variableName]
	}
	return undefined
}

// Interface for validated environment variables
export interface EnvConfig {
	BETTER_AUTH_URL: string
	BETTER_AUTH_SECRET: string
	BETTER_AUTH_REDIS_URL: string
	AUTH_DB_URL: string
	REDIS_URL: string
	APP_PUBLIC_URL: string
}

/**
 * Validate and retrieve required environment variables
 *
 * @returns Validated environment configuration
 * @throws {AUTHError} If required environment variables are missing
 */
export function getEnvConfig(): EnvConfig {
	const BETTER_AUTH_URL = getEnv('BETTER_AUTH_URL')
	const BETTER_AUTH_SECRET = getEnv('BETTER_AUTH_SECRET')
	const BETTER_AUTH_REDIS_URL = getEnv('BETTER_AUTH_REDIS_URL')
	const AUTH_DB_URL = getEnv('AUTH_DB_URL')
	const REDIS_URL = getEnv('REDIS_URL')
	const APP_PUBLIC_URL = getEnv('APP_PUBLIC_URL')

	// Validate required core environment variables
	if (!BETTER_AUTH_URL) {
		throw new AUTHError(
			`BETTER_AUTH_URL environment variable not set. BETTER_AUTH_URL is required.`
		)
	}

	// Validate required core environment variables
	if (!BETTER_AUTH_SECRET) {
		throw new AUTHError(
			`BETTER_AUTH_SECRET environment variable not set. BETTER_AUTH_SECRET is required.`
		)
	}

	if (!AUTH_DB_URL) {
		throw new AUTHError(`AUTH_DB_URL environment variable not set. AUTH_DB_URL is required.`)
	}

	if (!BETTER_AUTH_REDIS_URL) {
		throw new AUTHError(
			`BETTER_AUTH_REDIS_URL environment variable not set. BETTER_AUTH_REDIS_URL is required.`
		)
	}

	if (!REDIS_URL) {
		throw new AUTHError(`REDIS_URL environment variable not set. REDIS_URL is required.`)
	}

	if (!APP_PUBLIC_URL) {
		throw new AUTHError(`APP_PUBLIC_URL environment variable not set. APP_PUBLIC_URL is required.`)
	}

	// Validate URL format
	try {
		new URL(BETTER_AUTH_URL)
	} catch (error) {
		throw new AUTHError(`Invalid URL format for BETTER_AUTH_URL: ${BETTER_AUTH_URL}`)
	}

	try {
		new URL(APP_PUBLIC_URL)
	} catch (error) {
		throw new AUTHError(`Invalid URL format for APP_PUBLIC_URL: ${APP_PUBLIC_URL}`)
	}

	return {
		BETTER_AUTH_URL,
		BETTER_AUTH_SECRET,
		BETTER_AUTH_REDIS_URL,
		AUTH_DB_URL,
		REDIS_URL,
		APP_PUBLIC_URL,
	}
}

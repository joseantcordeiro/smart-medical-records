import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import type { MCPServerResources, Resource } from '@mastra/mcp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const NOTES_DIR = path.resolve(__dirname, '../../notes') // relative to the default output directory

const listNoteFiles = async (): Promise<Resource[]> => {
	try {
		await fs.mkdir(NOTES_DIR, { recursive: true })
		const files = await fs.readdir(NOTES_DIR)
		return files
			.filter((file) => file.endsWith('.md'))
			.map((file) => {
				const title = file.replace('.md', '')
				return {
					uri: `notes://${title}`,
					name: title,
					description: `A note about ${title}`,
					mime_type: 'text/markdown',
				}
			})
	} catch (error) {
		console.error('Error listing note resources:', error)
		return []
	}
}

const readNoteFile = async (uri: string): Promise<string | null> => {
	const title = uri.replace('notes://', '')
	const notePath = path.join(NOTES_DIR, `${title}.md`)
	try {
		return await fs.readFile(notePath, 'utf-8')
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
			console.error(`Error reading resource ${uri}:`, error)
		}
		return null
	}
}

export const resourceHandlers: MCPServerResources = {
	listResources: listNoteFiles,
	getResourceContent: async ({ uri }: { uri: string }) => {
		const content = await readNoteFile(uri)
		if (content === null) return { text: '' }
		return { text: content }
	},
}

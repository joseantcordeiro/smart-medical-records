import {
	ChatBubble,
	ChatBubbleAction,
	ChatBubbleAvatar,
	ChatBubbleMessage,
} from '@/components/ai/chat-bubble'
import { ChatInput } from '@/components/ai/chat-input'
import { ChatMessageList } from '@/components/ai/chat-message-list'
import CodeDisplayBlock from '@/components/ai/code-display-block'
import { chat } from '@/lib/ai/chat'
import { CopyIcon } from '@radix-ui/react-icons'
import { createFileRoute } from '@tanstack/react-router'
import { Bot, CornerDownLeft, Mic, Paperclip, RefreshCcw, Volume2 } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Button } from '@repo/ui/components/ui/button'

import type { ChatRequest } from '@/lib/ai/chat'

export const Route = createFileRoute('/dashboard/chat/$pathname')({
	component: RouteComponent,
})

const ChatAiIcons = [
	{
		icon: CopyIcon,
		label: 'Copy',
	},
	{
		icon: RefreshCcw,
		label: 'Refresh',
	},
	{
		icon: Volume2,
		label: 'Volume',
	},
]

type Message = {
	role: 'assistant' | 'user' | 'tool' | 'system'
	content: string
}

function RouteComponent() {
	const { pathname } = Route.useParams()
	const [isGenerating, setIsGenerating] = useState(false)
	const [status, setStatus] = useState<'submitted' | 'streaming' | 'ready' | 'error'>('ready')
	const [isLoading, setIsLoading] = useState(false)
	const [messages, setMessages] = useState<Message[]>([])
	const [input, setInput] = useState('')

	const messagesRef = useRef<HTMLDivElement>(null)
	const formRef = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (messagesRef.current) {
			messagesRef.current.scrollTop = messagesRef.current.scrollHeight
		}
	}, [messages])

	const handleInputChange = (e: any) => {
		setInput(e.target.value)
	}

	const handleSubmit = useCallback(
		async (event?: { preventDefault?: () => void }) => {
			setIsLoading(true)
			event?.preventDefault?.()

			if (!input) return

			const message: Message = {
				role: 'user',
				content: input,
			}

			const updatedMessages = [...messages, message]

			setMessages(updatedMessages)

			const chatRequest: ChatRequest = {
				assistantId: pathname,
				message: message,
			}

			try {
				const message = await chat({ data: chatRequest })
				const updatedMessages = [...messages, message]
				setMessages(updatedMessages)
				setIsGenerating(false)
			} catch (error) {
				setIsGenerating(false)
			}

			setInput('')
			setIsLoading(false)
		},
		[input, chat]
	)

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsGenerating(true)
		void handleSubmit(e)
	}

	const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			if (isGenerating || isLoading || !input) return
			setIsGenerating(true)
			void onSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
		}
	}

	const handleActionClick = async (action: string, messageIndex: number) => {
		console.log('Action clicked:', action, 'Message index:', messageIndex)
		if (action === 'Refresh') {
			setIsGenerating(true)
			try {
				await reload()
			} catch (error) {
				console.error('Error reloading:', error)
			} finally {
				setIsGenerating(false)
			}
		}

		if (action === 'Copy') {
			const message = messages[messageIndex]
			if (message && message.role === 'assistant') {
				void navigator.clipboard.writeText(message.content)
			}
		}
	}

	const reload = useCallback(async () => {
		//const messages = messagesRef.current;

		if (messages.length === 0) {
			return null
		}

		// Remove last assistant message and retry last user message.
		const lastMessage = messages[messages.length - 1]
		const chatRequest: ChatRequest = {
			assistantId: pathname,
			message:
				lastMessage.role === 'assistant'
					? messages[messages.length - 2] // get the previous user message
					: lastMessage,
		}
		try {
			const message = await chat({ data: chatRequest })
			const updatedMessages = [...messages, message]
			setMessages(updatedMessages)
			setIsGenerating(false)
		} catch (error) {
			setIsGenerating(false)
		}
		return
	}, [chat])

	return (
		<div className="flex items-center justify-between mb-4 p-3">
			<div className="flex gap-1 sm:gap-2 items-center flex-shrink-0">
				<h1 className="text-2xl font-bold">Chat with {pathname}</h1>
				<>
					<div className="w-full px-4 pb-4">
						<ChatMessageList>
							{/* Messages */}
							{messages &&
								messages.map((message, index) => (
									<ChatBubble key={index} variant={message.role == 'user' ? 'sent' : 'received'}>
										<ChatBubbleAvatar src="" fallback={message.role == 'user' ? '👨🏽' : '🤖'} />
										<ChatBubbleMessage>
											{message.content.split('```').map((part: string, index: number) => {
												if (index % 2 === 0) {
													return (
														<Markdown key={index} remarkPlugins={[remarkGfm]}>
															{part}
														</Markdown>
													)
												} else {
													return (
														<pre className="whitespace-pre-wrap pt-2" key={index}>
															<CodeDisplayBlock code={part} lang="" />
														</pre>
													)
												}
											})}

											{message.role === 'assistant' && messages.length - 1 === index && (
												<div className="flex items-center mt-1.5 gap-1">
													{!isGenerating && (
														<>
															{ChatAiIcons.map((icon, iconIndex) => {
																const Icon = icon.icon
																return (
																	<ChatBubbleAction
																		variant="outline"
																		className="size-5"
																		key={iconIndex}
																		icon={<Icon className="size-3" />}
																		onClick={() => handleActionClick(icon.label, index)}
																	/>
																)
															})}
														</>
													)}
												</div>
											)}
										</ChatBubbleMessage>
									</ChatBubble>
								))}

							{/* Loading */}
							{isGenerating && (
								<ChatBubble variant="received">
									<ChatBubbleAvatar src="" fallback="🤖" />
									<ChatBubbleMessage isLoading />
								</ChatBubble>
							)}
						</ChatMessageList>
					</div>
					{/* Form and Footer fixed at the bottom */}
					<div className="w-full fixed bottom-0 px-4 pb-4">
						<form
							ref={formRef}
							onSubmit={onSubmit}
							className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
						>
							<ChatInput
								value={input}
								onKeyDown={onKeyDown}
								onChange={handleInputChange}
								placeholder="Hi! 👋 How can I assist you today?"
								className="rounded-lg bg-background border-0 shadow-none focus-visible:ring-0"
							/>
							<div className="flex items-center p-3 pt-0">
								<Button variant="ghost" size="icon">
									<Paperclip className="size-4" />
									<span className="sr-only">Attach file</span>
								</Button>

								<Button variant="ghost" size="icon">
									<Mic className="size-4" />
									<span className="sr-only">Use Microphone</span>
								</Button>

								<Button variant="ghost" size="icon">
									<Bot className="size-4" />
									<span className="sr-only">{pathname}</span>
								</Button>

								<Button
									disabled={!input || isLoading}
									type="submit"
									size="sm"
									className="ml-auto gap-1.5"
								>
									Send Message
									<CornerDownLeft className="size-3.5" />
								</Button>
							</div>
						</form>
					</div>
				</>
			</div>
		</div>
	)
}

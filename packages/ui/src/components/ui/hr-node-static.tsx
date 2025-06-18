import { SlateElement } from 'platejs'
import * as React from 'react'

import { cn } from '@repo/ui/lib/utils'

import type { SlateElementProps } from 'platejs'

export function HrElementStatic(props: SlateElementProps) {
	return (
		<SlateElement {...props}>
			<div className="cursor-text py-6" contentEditable={false}>
				<hr className={cn('h-0.5 rounded-sm border-none bg-muted bg-clip-content')} />
			</div>
			{props.children}
		</SlateElement>
	)
}

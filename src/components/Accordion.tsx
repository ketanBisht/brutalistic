"use client"

import { useState } from 'react'
import { cn } from '../utils/cn'

interface AccordionItem {
  id: string
  trigger: React.ReactNode
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
  defaultOpen?: string[]
}

export function Accordion({ items, allowMultiple = false, defaultOpen = [], className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen)

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      )
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={cn('flex flex-col border-[2.5px] border-nb-black shadow-brutal', className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className={cn(index !== 0 && 'border-t-[2.5px] border-nb-black')}>
            <button
              id={`accordion-trigger-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              onClick={() => toggle(item.id)}
              className={cn(
                'w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm text-nb-black',
                'hover:bg-nb-yellow hover:text-[#0d0d0d] transition-colors duration-100',
                isOpen && 'bg-nb-yellow text-[#0d0d0d]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-nb-black'
              )}
            >
              <span>{item.trigger}</span>
              {/* Animated chevron */}
              <svg
                className={cn(
                  'w-4 h-4 shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4 6 8 10 12 6" />
              </svg>
            </button>

            {/* Collapsible content */}
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-[500px] border-t-[2.5px] border-nb-black' : 'max-h-0'
              )}
            >
              <div className="px-5 py-4 text-sm text-nb-black opacity-80 bg-nb-white">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

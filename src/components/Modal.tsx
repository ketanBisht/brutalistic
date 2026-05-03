"use client"

import { useEffect, useRef } from 'react'
import { cn } from '../utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, title, children, footer, className }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-nb-black/60"
        style={{ backdropFilter: 'blur(2px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel — uses our custom pop-in animation */}
      <div
        ref={dialogRef}
        className={cn(
          'relative z-10 bg-nb-white border-[2.5px] border-nb-black shadow-brutal-xl',
          'w-full max-w-md animate-pop-in',
          className
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b-[2.5px] border-nb-black">
            <h2 id="modal-title" className="font-bold text-lg text-nb-black">
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 flex items-center justify-center border-[2px] border-nb-black bg-nb-white hover:bg-nb-yellow transition-colors duration-100 font-bold text-xl leading-none cursor-pointer"
            >
              ×
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-5 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="px-5 py-4 border-t-[2.5px] border-nb-black bg-nb-gray flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}


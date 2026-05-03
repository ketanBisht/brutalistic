import * as React from 'react'
import { cn } from '../utils/cn'

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode
}

export function Breadcrumb({ className, separator = '/', children, ...props }: BreadcrumbProps) {
  const items = React.Children.toArray(children).filter(Boolean)

  return (
    <nav aria-label="breadcrumb" className={cn('flex flex-wrap items-center text-sm font-bold text-nb-black', className)} {...props}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((child, index) => (
          <li key={index} className="flex items-center gap-2">
            {child}
            {index < items.length - 1 && (
              <span className="text-nb-black/50 select-none mx-1" aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export interface BreadcrumbItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

export function BreadcrumbItem({ className, active, children, ...props }: BreadcrumbItemProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center hover:text-nb-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-black focus-visible:ring-offset-2 transition-colors',
        active ? 'text-nb-black bg-nb-yellow px-2 py-0.5 border-[2.5px] border-nb-black shadow-brutal-sm' : 'text-nb-black/70 hover:bg-nb-gray px-2 py-0.5',
        className
      )}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

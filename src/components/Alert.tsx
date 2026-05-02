import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const alertVariants = cva(
  'relative w-full border-[2.5px] border-nb-black p-4 flex gap-3 items-start',
  {
    variants: {
      variant: {
        default: 'bg-nb-white shadow-brutal-sm',
        info: 'bg-nb-blue shadow-brutal-sm',
        success: 'bg-nb-green shadow-brutal-sm',
        warning: 'bg-nb-yellow shadow-brutal-sm',
        error: 'bg-nb-red shadow-brutal-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
}

export function Alert({ className, variant, icon, children, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && <div className="shrink-0 text-nb-black mt-0.5">{icon}</div>}
      <div className="flex flex-col gap-1 w-full text-nb-black">{children}</div>
    </div>
  )
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn('font-black text-base leading-none tracking-tight', className)}
      {...props}
    />
  )
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      className={cn('text-sm opacity-90 leading-relaxed', className)}
      {...props}
    />
  )
}

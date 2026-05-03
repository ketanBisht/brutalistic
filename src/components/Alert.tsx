import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const alertVariants = cva(
  'relative w-full border-[2.5px] border-nb-black p-4 flex gap-3 items-start',
  {
    variants: {
      variant: {
        default: 'bg-nb-white shadow-brutal-sm',
        info: 'bg-nb-blue border-[#0d0d0d] shadow-[3px_3px_0px_0px_#0d0d0d]',
        success: 'bg-nb-green border-[#0d0d0d] shadow-[3px_3px_0px_0px_#0d0d0d]',
        warning: 'bg-nb-yellow border-[#0d0d0d] shadow-[3px_3px_0px_0px_#0d0d0d]',
        error: 'bg-nb-red border-[#0d0d0d] shadow-[3px_3px_0px_0px_#0d0d0d]',
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
  const isVibrant = variant !== 'default'
  const textColorClass = isVibrant ? 'text-[#0d0d0d]' : 'text-nb-black'

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && <div className={cn("shrink-0 mt-0.5", textColorClass)}>{icon}</div>}
      <div className={cn("flex flex-col gap-1 w-full", textColorClass)}>{children}</div>
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

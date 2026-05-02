import React from 'react'
import { cn } from '../utils/cn'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The progress value from 0 to 100 */
  value?: number
  /** If true, shows an animated striped background */
  indeterminate?: boolean
  /** The color of the progress bar */
  variant?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'black'
}

export function Progress({
  value = 0,
  indeterminate = false,
  variant = 'yellow',
  className,
  ...props
}: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), 100)

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? undefined : safeValue}
      className={cn(
        'h-6 w-full bg-nb-white border-[2.5px] border-nb-black shadow-brutal-sm overflow-hidden',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'h-full border-r-[2.5px] border-nb-black transition-all duration-300 ease-out',
          {
            'bg-nb-yellow': variant === 'yellow',
            'bg-nb-pink': variant === 'pink',
            'bg-nb-blue': variant === 'blue',
            'bg-nb-green': variant === 'green',
            'bg-nb-orange': variant === 'orange',
            'bg-nb-purple': variant === 'purple',
            'bg-nb-red': variant === 'red',
            'bg-nb-black': variant === 'black',
            // Indeterminate stripe animation
            'w-full animate-progress-stripe border-r-0': indeterminate,
          }
        )}
        style={{
          width: indeterminate ? '100%' : `${safeValue}%`,
          backgroundImage: indeterminate
            ? 'linear-gradient(45deg, rgba(0,0,0,0.15) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15) 75%, transparent 75%, transparent)'
            : 'none',
          backgroundSize: '2rem 2rem',
        }}
      />
    </div>
  )
}

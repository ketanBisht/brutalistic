import React from 'react'
import { cn } from '../utils/cn'

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label describing the switch */
  label?: string
  /** Description below the label */
  description?: string
}

export function Switch({ className, label, description, id, disabled, ...props }: SwitchProps) {
  const switchId = id || Math.random().toString(36).slice(2)

  return (
    <div className={cn('flex items-start gap-3', className)}>
      <div className="relative inline-flex items-center mt-0.5">
        <input
          type="checkbox"
          id={switchId}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <label
          htmlFor={switchId}
          className={cn(
            'w-12 h-6 bg-nb-white border-[2.5px] border-nb-black cursor-pointer transition-colors duration-200 block shadow-brutal-sm',
            'peer-focus-visible:ring-4 peer-focus-visible:ring-nb-yellow peer-focus-visible:ring-offset-2',
            'peer-checked:bg-nb-yellow peer-checked:shadow-brutal-sm',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <span
            className={cn(
              'absolute left-[2.5px] top-[2.5px] w-4 h-4 bg-nb-black border-[2.5px] border-nb-black transition-transform duration-200',
              'peer-checked:translate-x-6'
            )}
          />
        </label>
      </div>
      {(label || description) && (
        <div className="flex flex-col gap-1">
          {label && (
            <label
              htmlFor={switchId}
              className={cn(
                'font-bold text-sm text-nb-black cursor-pointer',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={cn('text-xs text-nb-black opacity-60', disabled && 'opacity-50')}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

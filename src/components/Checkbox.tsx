import { cn } from '../utils/cn'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
}

export function Checkbox({ label, description, className, id, ...props }: CheckboxProps) {
  const checkboxId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        'flex items-start gap-3 cursor-pointer group',
        props.disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div className="relative mt-0.5 shrink-0">
        <input
          type="checkbox"
          id={checkboxId}
          className="peer sr-only"
          {...props}
        />
        {/* Custom checkbox box */}
        <div
          className={cn(
            'w-5 h-5 border-[2.5px] border-nb-black bg-nb-white',
            'transition-all duration-100',
            'peer-checked:bg-nb-yellow',
            'peer-focus-visible:shadow-brutal-sm',
            'group-hover:shadow-brutal-sm',
          )}
        />
        {/* Checkmark */}
        <svg
          className="absolute inset-0 w-5 h-5 opacity-0 peer-checked:opacity-100 transition-opacity duration-100 pointer-events-none"
          viewBox="0 0 20 20"
          fill="none"
          stroke="#0d0d0d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 10 8 14 16 6" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-nb-black leading-5">{label}</span>
        {description && (
          <span className="text-xs text-gray-500 mt-0.5">{description}</span>
        )}
      </div>
    </label>
  )
}

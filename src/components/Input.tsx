import { cn } from '../utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export function Input({ label, error, hint, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-nb-black">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-2.5 border-[2.5px] border-nb-black bg-nb-white font-sans text-sm',
          'placeholder:text-nb-black placeholder:opacity-50',
          'focus:outline-none focus:shadow-brutal focus:translate-x-[-2px] focus:translate-y-[-2px]',
          'transition-all duration-100',
          error && 'border-nb-red focus:shadow-[5px_5px_0px_0px_#ef4444]',
          className
        )}
        {...props}
      />
      {hint && !error && <p className="text-xs text-nb-black opacity-60">{hint}</p>}
      {error && <p className="text-xs text-nb-red font-medium">{error}</p>}
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export function Textarea({ label, error, hint, className, id, ...props }: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-semibold text-nb-black">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={4}
        className={cn(
          'w-full px-4 py-2.5 border-[2.5px] border-nb-black bg-nb-white font-sans text-sm resize-y',
          'placeholder:text-nb-black placeholder:opacity-50',
          'focus:outline-none focus:shadow-brutal focus:translate-x-[-2px] focus:translate-y-[-2px]',
          'transition-all duration-100',
          error && 'border-nb-red focus:shadow-[5px_5px_0px_0px_#ef4444]',
          className
        )}
        {...props}
      />
      {hint && !error && <p className="text-xs text-nb-black opacity-60">{hint}</p>}
      {error && <p className="text-xs text-nb-red font-medium">{error}</p>}
    </div>
  )
}

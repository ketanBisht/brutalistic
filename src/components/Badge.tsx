import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-semibold text-xs border-[2px] border-nb-black px-2.5 py-1 leading-none',
  {
    variants: {
      variant: {
        yellow:  'bg-nb-yellow text-[#0d0d0d] border-[#0d0d0d]',
        pink:    'bg-nb-pink text-[#0d0d0d] border-[#0d0d0d]',
        blue:    'bg-nb-blue text-[#0d0d0d] border-[#0d0d0d]',
        green:   'bg-nb-green text-[#0d0d0d] border-[#0d0d0d]',
        orange:  'bg-nb-orange text-[#0d0d0d] border-[#0d0d0d]',
        purple:  'bg-nb-purple text-[#0d0d0d] border-[#0d0d0d]',
        red:     'bg-nb-red text-[#0d0d0d] border-[#0d0d0d]',
        black:   'bg-nb-black text-nb-white',
        outline: 'bg-nb-white text-nb-black',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5',
        md: 'text-xs px-2.5 py-1',
        lg: 'text-sm px-3 py-1.5',
      },
      shadow: {
        true:  'shadow-brutal-sm',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'yellow',
      size: 'md',
      shadow: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  dot?: boolean
}

export function Badge({ variant, size, shadow, dot, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, shadow }), className)} {...props}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 shrink-0" />
      )}
      {children}
    </span>
  )
}

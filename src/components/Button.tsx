import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-100 cursor-pointer select-none border-[2.5px] border-nb-black active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-black focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-nb-yellow text-[#0d0d0d] shadow-[5px_5px_0px_0px_#0d0d0d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#0d0d0d] border-[2.5px] border-[#0d0d0d]',
        secondary:
          'bg-nb-black text-nb-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm',
        outline:
          'bg-nb-white text-nb-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm hover:bg-nb-gray',
        ghost:
          'bg-transparent border-transparent shadow-none text-nb-black hover:bg-nb-gray hover:border-nb-black',
        danger:
          'bg-nb-red text-[#0d0d0d] shadow-[5px_5px_0px_0px_#0d0d0d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#0d0d0d] border-[2.5px] border-[#0d0d0d]',
        success:
          'bg-nb-green text-[#0d0d0d] shadow-[5px_5px_0px_0px_#0d0d0d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#0d0d0d] border-[2.5px] border-[#0d0d0d]',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5',
        lg: 'px-7 py-3.5 text-base',
        icon: 'w-10 h-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

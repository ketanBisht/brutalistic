import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const avatarVariants = cva(
  'relative inline-flex items-center justify-center shrink-0 overflow-hidden border-[2.5px] border-[#0d0d0d] shadow-[3px_3px_0px_0px_#0d0d0d] bg-nb-yellow text-[#0d0d0d] font-black',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-xs',
        md: 'w-12 h-12 text-base',
        lg: 'w-16 h-16 text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  /** The image URL */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Fallback initials to show if image is missing */
  fallback?: string
}

export function Avatar({ className, size, src, alt, fallback, ...props }: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="uppercase">{fallback?.slice(0, 2) || '?'}</span>
      )}
    </div>
  )
}

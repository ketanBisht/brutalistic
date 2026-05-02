import { cn } from '../utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  accent?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange' | 'purple' | 'none'
}

const accentMap: Record<NonNullable<CardProps['accent']>, string> = {
  yellow: 'border-t-4 border-t-nb-yellow',
  pink:   'border-t-4 border-t-nb-pink',
  blue:   'border-t-4 border-t-nb-blue',
  green:  'border-t-4 border-t-nb-green',
  orange: 'border-t-4 border-t-nb-orange',
  purple: 'border-t-4 border-t-nb-purple',
  none:   '',
}

export function Card({ children, className, accent = 'none' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-nb-white border-[2.5px] border-nb-black shadow-brutal',
        accentMap[accent],
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('px-5 py-4 border-b-[2.5px] border-nb-black', className)}>
      {children}
    </div>
  )
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn('px-5 py-4', className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('px-5 py-4 border-t-[2.5px] border-nb-black bg-nb-gray', className)}>
      {children}
    </div>
  )
}

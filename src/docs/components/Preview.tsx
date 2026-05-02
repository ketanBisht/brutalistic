import { cn } from '../../utils/cn'

export function Preview({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('p-10 border-[2.5px] border-nb-black bg-nb-gray flex items-center justify-center min-h-[250px]', className)}>
      {children}
    </div>
  )
}

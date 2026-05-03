import * as React from 'react'
import { cn } from '../utils/cn'

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  onValueChange?: (value: string) => void
}

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
}>({ value: '', onValueChange: () => {} })

export function Tabs({ defaultValue, onValueChange, className, children, ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue)

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={cn('flex flex-col w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2 border-b-[2.5px] border-nb-black pb-2 mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  const isActive = context.value === value

  return (
    <button
      onClick={() => context.onValueChange(value)}
      className={cn(
        'px-4 py-2 font-bold text-sm border-[2.5px] border-nb-black transition-all duration-100 cursor-pointer',
        isActive
          ? 'bg-nb-yellow text-[#0d0d0d] shadow-[3px_3px_0px_0px_#0d0d0d] border-[#0d0d0d] translate-x-[-2px] translate-y-[-2px]'
          : 'bg-nb-white text-nb-black hover:bg-nb-gray shadow-none translate-x-[0px] translate-y-[0px]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext)

  if (context.value !== value) return null

  return (
    <div
      className={cn(
        'p-6 border-[2.5px] border-nb-black bg-nb-white shadow-brutal',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

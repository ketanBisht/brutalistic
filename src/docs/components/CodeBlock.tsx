import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '../../utils/cn'

export function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('relative group', className)}>
      <div className="absolute right-4 top-4">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center w-8 h-8 bg-nb-white border-[2.5px] border-nb-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-6 bg-nb-black text-nb-white border-[2.5px] border-nb-black overflow-x-auto text-sm font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

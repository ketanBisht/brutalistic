import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const features = [
  {
    icon: '⚡',
    title: 'Zero fluff',
    description: 'No rounded corners masking intent. Every pixel is intentional. Neobrutalism is clarity in its rawest form.',
  },
  {
    icon: '🎨',
    title: 'Bold palette',
    description: 'High-saturation yellows, pinks, blues — colors that work, not colors that whisper. Accessibility is non-negotiable.',
  },
  {
    icon: '📦',
    title: 'Tree-shakable',
    description: 'Import only what you use. The bundler does the rest. Each component is a self-contained module.',
  },
  {
    icon: '🔧',
    title: 'Composable',
    description: 'Every component accepts className and forwards refs. Override anything. The cn() utility handles class merging.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'ARIA attributes, keyboard navigation, focus rings — all built in. Brutalist design, inclusive experience.',
  },
  {
    icon: '🚀',
    title: 'Tailwind v4',
    description: 'Built on the new @theme directive. Design tokens are CSS variables. Override without a config file.',
  },
]

export function Landing() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install brutalistic')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-24">
      {/* ─── Hero ─── */}
      <header className="border-b-[2.5px] border-nb-black bg-nb-white -mt-12 -mx-8 px-8 py-20">
        <div className="flex flex-col items-start gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="yellow" shadow dot>New release</Badge>
            <Badge variant="outline">React + Tailwind v4</Badge>
            <Badge variant="green">Open Source</Badge>
          </div>
          <h1 className="text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-nb-black">
            UI components<br />
            <span className="relative inline-block">
              <span className="relative z-10">that don&apos;t apologize.</span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-nb-yellow z-0" />
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            A raw, high-contrast React component library built on the neobrutalist design philosophy.
            Bold borders, hard shadows, zero compromise.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/docs/installation">
              <Button size="lg">Get Started →</Button>
            </Link>
            <Link to="/docs/components/button">
              <Button variant="outline" size="lg">Browse Components</Button>
            </Link>
          </div>
          <button
            onClick={handleCopy}
            className="font-mono text-sm bg-nb-black text-nb-yellow px-4 py-2 border-[2.5px] border-nb-black shadow-brutal-sm cursor-pointer hover:bg-gray-900 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center gap-2 mt-4"
          >
            npm install brutalistic
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </header>

      {/* ─── Feature Grid ─── */}
      <section className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <Badge variant="outline" size="sm" className="mb-3">Why</Badge>
          <h2 className="text-3xl font-black text-nb-black mb-2 tracking-tight">Why Brutalistic?</h2>
          <p className="text-gray-500 text-sm">A design philosophy for people who believe software should have character.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-[2.5px] border-nb-black p-6 bg-nb-white hover:shadow-brutal hover:-translate-x-[3px] hover:-translate-y-[3px] transition-all duration-150"
            >
              <div className="w-10 h-10 bg-nb-yellow border-[2.5px] border-nb-black flex items-center justify-center text-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-base text-nb-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

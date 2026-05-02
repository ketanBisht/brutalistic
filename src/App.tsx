import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card, CardHeader, CardBody, CardFooter } from './components/Card'
import { Input, Textarea } from './components/Input'
import { Checkbox } from './components/Checkbox'
import { Badge } from './components/Badge'
import { Modal } from './components/Modal'
import { Accordion } from './components/Accordion'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formChecked, setFormChecked] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setToastMessage('Copied to clipboard!')
    setTimeout(() => setToastMessage(null), 3000)
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const accordionItems = [
    {
      id: 'q1',
      trigger: 'What makes this neobrutalist?',
      content:
        'Hard borders, bold shadows, high contrast colors, no border-radius, and flat backgrounds. Every element screams structure — no soft edges, no ambiguity.',
    },
    {
      id: 'q2',
      trigger: 'Is this library free to use?',
      content:
        'Core components (Button, Card, Input, etc.) are open-source and free. Premium blocks — Pricing tables, Auth flows, Dashboards — will be available through a paid tier.',
    },
    {
      id: 'q3',
      trigger: 'Does it work with my existing Tailwind setup?',
      content:
        'Yes. Brutalistic uses Tailwind CSS v4 and exports clean, mergeable class strings via the cn() utility. Bring your own config, override anything.',
    },
  ]

  return (
    <div className="min-h-screen bg-nb-white font-sans">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-pop-in">
          <Badge variant="black" shadow size="lg" className="px-4 py-3 text-sm flex items-center gap-2">
            <span>✅</span> {toastMessage}
          </Badge>
        </div>
      )}

      {/* ─── Navbar ─── */}
      <nav className="sticky top-0 z-40 border-b-[2.5px] border-nb-black bg-nb-yellow">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-nb-black flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-nb-yellow font-black text-sm leading-none">B</span>
            </div>
            <span className="font-black text-lg tracking-tight text-nb-black cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>brutalistic</span>
            <Badge variant="black" size="sm" shadow>v0.1.0</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button id="nav-docs-btn" variant="ghost" size="sm" onClick={() => scrollToSection('installation')}>Docs</Button>
            <Button id="nav-github-btn" variant="outline" size="sm" onClick={() => window.open('https://github.com', '_blank')}>GitHub</Button>
            <Button id="nav-npm-btn" variant="secondary" size="sm" onClick={() => handleCopy('npm install brutalistic')}>npm install</Button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <header className="border-b-[2.5px] border-nb-black bg-nb-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col items-start gap-6 max-w-3xl">
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
              <Button id="hero-get-started" size="lg" onClick={() => scrollToSection('installation')}>Get Started →</Button>
              <Button id="hero-browse-components" variant="outline" size="lg" onClick={() => scrollToSection('components')}>Browse Components</Button>
            </div>
            <button
              onClick={() => handleCopy('npm install brutalistic')}
              className="font-mono text-sm bg-nb-black text-nb-yellow px-4 py-2 border-[2.5px] border-nb-black shadow-brutal-sm cursor-pointer hover:bg-gray-900 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center gap-2"
              title="Copy to clipboard"
            >
              npm install brutalistic
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* ─── Installation ─── */}
        <section id="installation" aria-labelledby="installation-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Setup"
            title="Installation"
            description="Get started with Brutalistic in your React + Tailwind project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Card accent="yellow">
              <CardHeader><span className="font-bold">1. Install package</span></CardHeader>
              <CardBody>
                <div className="flex items-center justify-between bg-nb-black text-nb-yellow p-3 text-sm font-mono border-[2.5px] border-nb-black">
                  <span>npm install brutalistic</span>
                  <Button variant="ghost" size="sm" className="text-nb-yellow hover:bg-gray-800 hover:text-nb-white hover:border-transparent active:border-transparent border-transparent px-2 shadow-none" onClick={() => handleCopy('npm install brutalistic')}>Copy</Button>
                </div>
              </CardBody>
            </Card>
            <Card accent="blue">
              <CardHeader><span className="font-bold">2. Add CSS</span></CardHeader>
              <CardBody>
                <p className="text-sm text-gray-600 mb-3">Import the CSS in your main entry file (e.g., main.tsx):</p>
                <div className="flex items-center justify-between bg-nb-black text-nb-white p-3 text-sm font-mono border-[2.5px] border-nb-black">
                  <span>import 'brutalistic/dist/style.css'</span>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800 hover:border-transparent active:border-transparent border-transparent px-2 shadow-none" onClick={() => handleCopy("import 'brutalistic/dist/style.css'")}>Copy</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <div id="components" className="pt-8 scroll-mt-24">
          <h2 className="text-4xl font-black text-nb-black mb-12 pb-4 border-b-[2.5px] border-nb-black">Components</h2>
        </div>

        {/* ─── Buttons ─── */}
        <section id="buttons" aria-labelledby="buttons-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Interaction"
            title="Button"
            description="Every variant of the Button component. Hover to see the satisfying shadow animation."
          />
          <div className="space-y-6">
            <ComponentRow label="Variants">
              <Button id="btn-primary" variant="primary">Primary</Button>
              <Button id="btn-secondary" variant="secondary">Secondary</Button>
              <Button id="btn-outline" variant="outline">Outline</Button>
              <Button id="btn-ghost" variant="ghost">Ghost</Button>
              <Button id="btn-danger" variant="danger">Danger</Button>
              <Button id="btn-success" variant="success">Success</Button>
            </ComponentRow>
            <ComponentRow label="Sizes">
              <Button id="btn-sm" size="sm">Small</Button>
              <Button id="btn-md" size="md">Medium</Button>
              <Button id="btn-lg" size="lg">Large</Button>
              <Button id="btn-icon" size="icon" aria-label="Icon button">★</Button>
            </ComponentRow>
            <ComponentRow label="Disabled">
              <Button id="btn-disabled-primary" disabled>Disabled Primary</Button>
              <Button id="btn-disabled-outline" variant="outline" disabled>Disabled Outline</Button>
            </ComponentRow>
          </div>
        </section>

        {/* ─── Badges ─── */}
        <section id="badges" aria-labelledby="badges-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Labels"
            title="Badge"
            description="Status indicators, category tags, and version labels."
          />
          <div className="space-y-6">
            <ComponentRow label="Colors">
              <Badge variant="yellow">Yellow</Badge>
              <Badge variant="pink">Pink</Badge>
              <Badge variant="blue">Blue</Badge>
              <Badge variant="green">Green</Badge>
              <Badge variant="orange">Orange</Badge>
              <Badge variant="purple">Purple</Badge>
              <Badge variant="red">Red</Badge>
              <Badge variant="black">Black</Badge>
              <Badge variant="outline">Outline</Badge>
            </ComponentRow>
            <ComponentRow label="With shadow">
              <Badge variant="yellow" shadow>Release</Badge>
              <Badge variant="pink" shadow dot>Live</Badge>
              <Badge variant="blue" shadow>v1.0.0</Badge>
              <Badge variant="green" shadow dot>Online</Badge>
              <Badge variant="red" shadow dot>Error</Badge>
            </ComponentRow>
          </div>
        </section>

        {/* ─── Cards ─── */}
        <section id="cards" aria-labelledby="cards-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Layout"
            title="Card"
            description="Structured content containers with optional color accent headers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['yellow', 'pink', 'blue'] as const).map((accent) => (
              <Card key={accent} accent={accent} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-nb-black capitalize">{accent} Card</span>
                    <Badge variant={accent} size="sm">New</Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This is a Card with a <strong>{accent}</strong> top accent border. Use cards to
                    group related content in a clear, structured container.
                  </p>
                </CardBody>
                <CardFooter>
                  <div className="flex gap-2">
                    <Button id={`card-btn-${accent}`} size="sm" variant="outline" onClick={() => handleCopy(`<Card accent="${accent}">`)}>Copy Code</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {(['green', 'orange'] as const).map((accent) => (
              <Card key={accent} accent={accent}>
                <CardHeader>
                  <span className="font-bold text-sm text-nb-black capitalize">{accent} Card</span>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-gray-600">
                    Cards can be combined with any other component to build rich layouts.
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── Form Inputs ─── */}
        <section id="inputs" aria-labelledby="inputs-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Forms"
            title="Input & Textarea"
            description="Form inputs that pop. Focus to see the signature inset shadow."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <Input
              id="input-name"
              label="Full Name"
              placeholder="e.g. Jane Doe"
              hint="Enter your legal name"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
            />
            <Input
              id="input-email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
            />
            <Input
              id="input-error"
              label="Username"
              placeholder="@handle"
              error="This username is already taken"
              defaultValue="brutalistic"
            />
            <Input
              id="input-disabled"
              label="API Key"
              value="brut-xxxx-xxxx-xxxx"
              disabled
            />
            <div className="md:col-span-2">
              <Textarea
                id="textarea-bio"
                label="Bio"
                placeholder="Tell us about yourself..."
                hint="Max 280 characters"
                rows={4}
              />
            </div>
          </div>
        </section>

        {/* ─── Checkboxes ─── */}
        <section id="checkboxes" aria-labelledby="checkboxes-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Selection"
            title="Checkbox"
            description="Custom checkboxes with yellow fill and brutalist focus states."
          />
          <div className="flex flex-col gap-4 max-w-sm">
            <Checkbox
              id="check-notifications"
              label="Email notifications"
              description="Receive updates about your account activity."
              checked={formChecked}
              onChange={e => setFormChecked(e.target.checked)}
            />
            <Checkbox
              id="check-terms"
              label="I agree to the Terms of Service"
              checked={termsChecked}
              onChange={e => setTermsChecked(e.target.checked)}
            />
            <Checkbox
              id="check-marketing"
              label="Marketing emails"
              description="Get occasional product updates and tips."
            />
            <Checkbox
              id="check-disabled"
              label="Disabled option"
              description="This checkbox cannot be changed."
              disabled
            />
          </div>
        </section>

        {/* ─── Accordion ─── */}
        <section id="accordion" aria-labelledby="accordion-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Disclosure"
            title="Accordion"
            description="Collapsible content panels. Click to expand. Yellow highlight on open state."
          />
          <div className="max-w-2xl">
            <Accordion items={accordionItems} defaultOpen={['q1']} />
          </div>
        </section>

        {/* ─── Modal ─── */}
        <section id="modal" aria-labelledby="modal-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Overlay"
            title="Modal / Dialog"
            description="Accessible dialog with backdrop, ESC key support, and scroll lock."
          />
          <div className="flex gap-4 flex-wrap">
            <Button id="open-modal-btn" variant="primary" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
          </div>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirm Action"
            footer={
              <>
                <Button id="modal-cancel-btn" variant="outline" size="sm" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button id="modal-confirm-btn" variant="danger" size="sm" onClick={() => {
                  setModalOpen(false);
                  setToastMessage('Item deleted successfully.');
                  setTimeout(() => setToastMessage(null), 3000);
                }}>
                  Delete
                </Button>
              </>
            }
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              Are you sure you want to delete this item? This action{' '}
              <strong className="text-nb-black">cannot be undone</strong>. All associated
              data will be permanently removed from our servers.
            </p>
          </Modal>
        </section>

        {/* ─── Feature Grid ─── */}
        <section id="features" aria-labelledby="features-heading" className="scroll-mt-24">
          <SectionHeader
            tag="Why"
            title="Why Brutalistic?"
            description="A design philosophy for people who believe software should have character."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t-[2.5px] border-nb-black bg-nb-black mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-nb-yellow flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-black text-xs text-nb-black">B</span>
            </div>
            <span className="font-bold text-nb-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>brutalistic</span>
            <Badge variant="yellow" size="sm">MIT</Badge>
          </div>
          <p className="text-sm text-gray-400">
            Built with React + Tailwind v4. No compromise.
          </p>
          <div className="flex gap-3">
            <Button id="footer-github" variant="ghost" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white" onClick={() => window.open('https://github.com', '_blank')}>
              GitHub
            </Button>
            <Button id="footer-npm" variant="ghost" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white" onClick={() => window.open('https://npmjs.com', '_blank')}>
              npm
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Helper sub-components ───────────────────────────────────────

function SectionHeader({
  tag,
  title,
  description,
}: {
  tag: string
  title: string
  description: string
}) {
  return (
    <div className="mb-8">
      <Badge variant="outline" size="sm" className="mb-3">{tag}</Badge>
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
        className="text-3xl font-black text-nb-black mb-2 tracking-tight"
      >
        {title}
      </h2>
      <p className="text-gray-500 text-sm max-w-xl">{description}</p>
    </div>
  )
}

function ComponentRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

const features = [
  {
    icon: '⚡',
    title: 'Zero fluff',
    description:
      'No rounded corners masking intent. Every pixel is intentional. Neobrutalism is clarity in its rawest form.',
  },
  {
    icon: '🎨',
    title: 'Bold palette',
    description:
      'High-saturation yellows, pinks, blues — colors that work, not colors that whisper. Accessibility is non-negotiable.',
  },
  {
    icon: '📦',
    title: 'Tree-shakable',
    description:
      'Import only what you use. The bundler does the rest. Each component is a self-contained module.',
  },
  {
    icon: '🔧',
    title: 'Composable',
    description:
      'Every component accepts className and forwards refs. Override anything. The cn() utility handles class merging.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description:
      'ARIA attributes, keyboard navigation, focus rings — all built in. Brutalist design, inclusive experience.',
  },
  {
    icon: '🚀',
    title: 'Tailwind v4',
    description:
      'Built on the new @theme directive. Design tokens are CSS variables. Override without a config file.',
  },
]

export default App


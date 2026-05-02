import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Accordion } from '../../components/Accordion'

export function AccordionDoc() {
  const items = [
    {
      id: 'q1',
      trigger: 'What makes this neobrutalist?',
      content: 'Hard borders, bold shadows, high contrast colors, no border-radius.',
    },
    {
      id: 'q2',
      trigger: 'Is this library free to use?',
      content: 'Core components are open-source and free.',
    },
  ]

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Accordion</h1>
        <p className="text-lg text-gray-600">
          Collapsible content panels with a yellow highlight on open state.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="w-full max-w-2xl mx-auto">
            <Accordion items={items} defaultOpen={['q1']} />
          </div>
        </Preview>
        <CodeBlock
          code={`import { Accordion } from 'brutalistic'

export default function App() {
  const items = [
    {
      id: 'q1',
      trigger: 'What makes this neobrutalist?',
      content: 'Hard borders, bold shadows, high contrast colors.',
    },
    {
      id: 'q2',
      trigger: 'Is this free?',
      content: 'Yes, the core components are free.',
    },
  ]

  return <Accordion items={items} defaultOpen={['q1']} />
}`}
        />
      </div>
    </div>
  )
}

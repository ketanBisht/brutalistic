import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Button } from '../../components/Button'

export function ButtonDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Button</h1>
        <p className="text-lg text-gray-600">
          The primary interactive element, featuring bold borders and hard shadows that compress on click.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Variants</h2>
        <p className="text-gray-600">Six bold variants to fit any neobrutalist layout.</p>
        <Preview className="flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Button } from '@k10_here/brutalistic'

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
    </div>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Sizes</h2>
        <Preview className="flex-col gap-6">
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Star">★</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">★</Button>`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Disabled</h2>
        <Preview className="flex-col gap-6">
          <div className="flex items-center gap-4">
            <Button disabled>Disabled Primary</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button disabled>Disabled</Button>`}
        />
      </div>
    </div>
  )
}

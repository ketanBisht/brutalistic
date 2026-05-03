import { Tooltip } from '../../components/Tooltip'
import { Button } from '../../components/Button'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'

export function TooltipDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-nb-black tracking-tight">Tooltip</h1>
        <p className="text-lg text-nb-black opacity-70">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black border-b-[2.5px] border-nb-black pb-2">Usage</h2>
        <Preview>
          <div className="flex gap-4">
            <Tooltip content="Add to library" position="top">
              <Button variant="outline">Hover</Button>
            </Tooltip>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Tooltip, Button } from '@k10_here/brutalistic'

export function TooltipDemo() {
  return (
    <Tooltip content="Add to library" position="top">
      <Button variant="outline">Hover</Button>
    </Tooltip>
  )
}`}
        />
      </div>
    </div>
  )
}

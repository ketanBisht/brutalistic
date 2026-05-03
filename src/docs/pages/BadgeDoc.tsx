import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Badge } from '../../components/Badge'

export function BadgeDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Badge</h1>
        <p className="text-lg text-nb-black opacity-70">
          Small status indicators, category tags, and version labels in 9 striking colors.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Colors</h2>
        <Preview className="flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="yellow">Yellow</Badge>
            <Badge variant="pink">Pink</Badge>
            <Badge variant="blue">Blue</Badge>
            <Badge variant="green">Green</Badge>
            <Badge variant="orange">Orange</Badge>
            <Badge variant="purple">Purple</Badge>
            <Badge variant="red">Red</Badge>
            <Badge variant="black">Black</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Badge } from '@k10_here/brutalistic'

export default function App() {
  return (
    <div className="flex gap-4">
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="pink">Pink</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="orange">Orange</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="black">Black</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">With Shadow & Dot</h2>
        <Preview className="flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="yellow" shadow>Release</Badge>
            <Badge variant="pink" shadow dot>Live</Badge>
            <Badge variant="blue" shadow>v1.0.0</Badge>
            <Badge variant="green" shadow dot>Online</Badge>
          </div>
        </Preview>
        <CodeBlock
          code={`<Badge variant="yellow" shadow>Release</Badge>
<Badge variant="pink" shadow dot>Live</Badge>
<Badge variant="blue" shadow>v1.0.0</Badge>`}
        />
      </div>
    </div>
  )
}

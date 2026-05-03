import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Avatar } from '../../components/Avatar'

export function AvatarDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Avatar</h1>
        <p className="text-lg text-nb-black opacity-70">
          A strict, square image container with hard borders and offset shadows.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="flex gap-6 items-center">
            <Avatar src="https://github.com/ketanBisht.png" fallback="KB" />
            <Avatar fallback="US" />
          </div>
        </Preview>
        <CodeBlock
          code={`import { Avatar } from '@k10_here/brutalistic'

export default function App() {
  return (
    <div className="flex gap-4">
      {/* With image */}
      <Avatar src="https://github.com/ketanBisht.png" alt="User" />
      
      {/* Fallback to initials */}
      <Avatar fallback="KB" />
    </div>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Sizes</h2>
        <Preview>
          <div className="flex gap-6 items-center justify-center w-full">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />`}
        />
      </div>
    </div>
  )
}

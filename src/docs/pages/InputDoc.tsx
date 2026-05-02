import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Input, Textarea } from '../../components/Input'

export function InputDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Input & Textarea</h1>
        <p className="text-lg text-gray-600">
          Form fields with strong boundaries and a signature inset shadow on focus.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
            <Input
              id="input-name"
              label="Full Name"
              placeholder="e.g. Jane Doe"
              hint="Enter your legal name"
            />
          </div>
        </Preview>
        <CodeBlock
          code={`import { Input } from '@k10_here/brutalistic'

export default function App() {
  return (
    <Input
      id="input-name"
      label="Full Name"
      placeholder="e.g. Jane Doe"
      hint="Enter your legal name"
    />
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Error & Disabled States</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
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
          </div>
        </Preview>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Textarea</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto">
            <Textarea
              id="textarea-bio"
              label="Bio"
              placeholder="Tell us about yourself..."
              hint="Max 280 characters"
              rows={4}
            />
          </div>
        </Preview>
        <CodeBlock
          code={`import { Textarea } from '@k10_here/brutalistic'

export default function App() {
  return (
    <Textarea
      id="bio"
      label="Bio"
      placeholder="Tell us about yourself..."
      rows={4}
    />
  )
}`}
        />
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Checkbox } from '../../components/Checkbox'

export function CheckboxDoc() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Checkbox</h1>
        <p className="text-lg text-gray-600">
          Custom checkboxes with a yellow fill and bold borders.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
            <Checkbox
              id="check-terms"
              label="I agree to the Terms of Service"
              description="You must agree to continue."
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </div>
        </Preview>
        <CodeBlock
          code={`import { useState } from 'react'
import { Checkbox } from 'brutalistic'

export default function App() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      id="check-terms"
      label="I agree to the Terms of Service"
      description="You must agree to continue."
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Disabled</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
            <Checkbox
              id="check-disabled"
              label="Disabled option"
              description="This checkbox cannot be changed."
              disabled
            />
          </div>
        </Preview>
      </div>
    </div>
  )
}

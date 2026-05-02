import { useState } from 'react'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Switch } from '../../components/Switch'

export function SwitchDoc() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Switch</h1>
        <p className="text-lg text-gray-600">
          A brutalist take on the classic toggle switch. Hard lines and high contrast.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto p-6 bg-nb-white border-[2.5px] border-nb-black shadow-brutal flex flex-col gap-6">
            <Switch
              id="airplane-mode"
              label="Airplane Mode"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
          </div>
        </Preview>
        <CodeBlock
          code={`import { useState } from 'react'
import { Switch } from 'brutalistic'

export default function App() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      id="airplane-mode"
      label="Airplane Mode"
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">With Description</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
            <Switch
              id="sync"
              label="Sync Contacts"
              description="Keep your contacts synced across all your brutalist devices."
              defaultChecked
            />
          </div>
        </Preview>
        <CodeBlock
          code={`<Switch
  id="sync"
  label="Sync Contacts"
  description="Keep your contacts synced across all your brutalist devices."
/>`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Disabled</h2>
        <Preview>
          <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
            <Switch
              id="disabled-off"
              label="Feature flag"
              description="This feature is not available yet."
              disabled
            />
            <Switch
              id="disabled-on"
              label="Required tracking"
              description="You cannot turn this off."
              disabled
              checked
            />
          </div>
        </Preview>
      </div>
    </div>
  )
}

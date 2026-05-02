import { useState, useEffect } from 'react'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Progress } from '../../components/Progress'
import { Button } from '../../components/Button'

export function ProgressDoc() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Progress</h1>
        <p className="text-lg text-gray-600">
          A thick, highly visible progress bar for displaying loading states or completion.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="w-full max-w-md mx-auto space-y-4">
            <Progress value={progress} variant="yellow" />
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Progress } from '@k10_here/brutalistic'

export default function App() {
  return <Progress value={66} variant="yellow" />
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Indeterminate (Loading)</h2>
        <p className="text-gray-600">Use the <code>indeterminate</code> prop for ongoing loading states. It automatically animates diagonal stripes.</p>
        <Preview>
          <div className="w-full max-w-md mx-auto space-y-6">
            <Progress indeterminate variant="blue" />
            <Progress indeterminate variant="pink" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Progress indeterminate variant="blue" />`}
        />
      </div>
    </div>
  )
}

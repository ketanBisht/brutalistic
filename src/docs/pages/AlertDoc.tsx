import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Alert, AlertTitle, AlertDescription } from '../../components/Alert'
import { AlertCircle, Terminal, CheckCircle2, AlertTriangle } from 'lucide-react'

export function AlertDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Alert</h1>
        <p className="text-lg text-gray-600">
          A high-contrast callout box for success, error, and informational messages.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <div className="w-full max-w-md mx-auto">
            <Alert variant="default" icon={<Terminal size={20} />}>
              <AlertTitle>System Notice</AlertTitle>
              <AlertDescription>
                A new version of Brutalistic is available. Run npm update.
              </AlertDescription>
            </Alert>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Alert, AlertTitle, AlertDescription } from 'brutalistic'
import { Terminal } from 'lucide-react'

export default function App() {
  return (
    <Alert variant="default" icon={<Terminal size={20} />}>
      <AlertTitle>System Notice</AlertTitle>
      <AlertDescription>
        A new version of Brutalistic is available. Run npm update.
      </AlertDescription>
    </Alert>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Variants</h2>
        <Preview className="flex-col gap-4">
          <div className="w-full max-w-md mx-auto space-y-4">
            <Alert variant="info" icon={<AlertCircle size={20} />}>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>Your account has been upgraded to Pro.</AlertDescription>
            </Alert>
            <Alert variant="success" icon={<CheckCircle2 size={20} />}>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Payment processed successfully.</AlertDescription>
            </Alert>
            <Alert variant="warning" icon={<AlertTriangle size={20} />}>
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>You are approaching your API rate limit.</AlertDescription>
            </Alert>
            <Alert variant="error" icon={<AlertCircle size={20} />}>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Failed to connect to the database.</AlertDescription>
            </Alert>
          </div>
        </Preview>
      </div>
    </div>
  )
}

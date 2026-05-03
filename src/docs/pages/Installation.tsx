import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Badge } from '../../components/Badge'

export function Installation() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Installation</h1>
        <p className="text-lg text-nb-black opacity-70">
          How to install and set up Brutalistic in your React project.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">1. Install the package</h2>
        <p className="text-nb-black opacity-70">Run the following command to add the library to your project dependencies:</p>
        <CodeBlock code="npm install @k10_here/brutalistic" />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">2. Configure Tailwind CSS v4</h2>
        <p className="text-nb-black opacity-70">
          Brutalistic is built with the new Tailwind v4 <code>@theme</code> directive. You just need to import our CSS file in your main entry point (e.g. <code>main.tsx</code> or <code>App.tsx</code>):
        </p>
        <CodeBlock code="import '@k10_here/brutalistic/dist/brutalistic.css';" />
        <div className="mt-4 p-4 border-[2.5px] border-nb-black bg-nb-yellow/10 flex items-start gap-3">
          <Badge variant="yellow" shadow size="sm">Note</Badge>
          <p className="text-sm text-nb-black opacity-80">
            This CSS file contains all the necessary neobrutalist design tokens (colors, shadows, borders) and will perfectly merge with your existing Tailwind setup.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">3. (Optional) Setup Dark Mode</h2>
        <p className="text-nb-black opacity-70">
          Brutalistic handles dark mode by smoothly inverting its core tokens. To enable zero-config dark mode, wrap your application in our <code>ThemeProvider</code>:
        </p>
        <CodeBlock
          code={`import { ThemeProvider } from '@k10_here/brutalistic'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  )
}`}
        />
        <div className="mt-4 p-4 border-[2.5px] border-nb-black bg-nb-yellow/10 flex items-start gap-3">
          <Badge variant="yellow" shadow size="sm">Tip</Badge>
          <p className="text-sm text-nb-black opacity-80">
            You can then use the <code>useTheme()</code> hook anywhere inside your app to read or change the theme (<code>light</code>, <code>dark</code>, or <code>system</code>).
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">4. Use a component</h2>
        <p className="text-nb-black opacity-70">You're all set! Import a component and start building.</p>
        <Preview>
          <button className="bg-nb-yellow text-nb-black border-[2.5px] border-nb-black px-6 py-2 font-bold shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm transition-all">
            Hello World
          </button>
        </Preview>
        <CodeBlock
          code={`import { Button } from '@k10_here/brutalistic'

function App() {
  return (
    <Button variant="primary" size="lg">
      Hello World
    </Button>
  )
}`}
        />
      </div>
    </div>
  )
}

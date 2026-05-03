import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/Tabs'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'

export function TabsDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-nb-black tracking-tight">Tabs</h1>
        <p className="text-lg text-nb-black opacity-70">A set of layered sections of content—known as tab panels—that are displayed one at a time.</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black border-b-[2.5px] border-nb-black pb-2">Usage</h2>
        <Preview>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here. Click save when you're done.
            </TabsContent>
            <TabsContent value="password">
              Change your password here. After saving, you'll be logged out.
            </TabsContent>
          </Tabs>
        </Preview>
        <CodeBlock
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@k10_here/brutalistic'

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}`}
        />
      </div>
    </div>
  )
}

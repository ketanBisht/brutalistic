import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Card, CardHeader, CardBody, CardFooter } from '../../components/Card'
import { Button } from '../../components/Button'
import { Badge } from '../../components/Badge'

export function CardDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Card</h1>
        <p className="text-lg text-gray-600">
          Structured content containers with optional color accent headers.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <p className="text-gray-600">Cards are composed of Header, Body, and Footer sub-components.</p>
        <Preview>
          <div className="w-full max-w-sm mx-auto">
            <Card accent="yellow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-nb-black">Yellow Card</span>
                  <Badge variant="yellow" size="sm">New</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This is a Card with a yellow top accent border. Use cards to group related content.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="outline" className="w-full">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Card, CardHeader, CardBody, CardFooter } from 'brutalistic'
import { Button, Badge } from 'brutalistic'

export default function App() {
  return (
    <Card accent="yellow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <span className="font-bold text-nb-black">Yellow Card</span>
          <Badge variant="yellow" size="sm">New</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-600">
          Use cards to group related content in a clear container.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="outline" className="w-full">Action</Button>
      </CardFooter>
    </Card>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Accents</h2>
        <p className="text-gray-600">Cards can have different colored top borders to indicate context or categories.</p>
        <Preview className="flex-col gap-6 items-stretch">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {(['pink', 'blue'] as const).map((accent) => (
              <Card key={accent} accent={accent}>
                <CardHeader>
                  <span className="font-bold text-nb-black capitalize">{accent} Accent</span>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-gray-600">Accent colors map to the design tokens.</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Preview>
      </div>
    </div>
  )
}

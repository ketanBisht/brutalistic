import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'

export function BreadcrumbDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-nb-black tracking-tight">Breadcrumb</h1>
        <p className="text-lg text-nb-black opacity-70">Displays the path to the current resource using a hierarchy of links.</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black border-b-[2.5px] border-nb-black pb-2">Usage</h2>
        <Preview>
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/components">Components</BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </Preview>
        <CodeBlock
          code={`import { Breadcrumb, BreadcrumbItem } from '@k10_here/brutalistic'

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/components">Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`}
        />
      </div>
    </div>
  )
}

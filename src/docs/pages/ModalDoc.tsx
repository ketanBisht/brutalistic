import { useState } from 'react'
import { Preview } from '../components/Preview'
import { CodeBlock } from '../components/CodeBlock'
import { Modal } from '../../components/Modal'
import { Button } from '../../components/Button'

export function ModalDoc() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-nb-black tracking-tight">Modal / Dialog</h1>
        <p className="text-lg text-nb-black opacity-70">
          Accessible dialog overlay with backdrop blur, scroll lock, and custom pop-in animation.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-nb-black">Usage</h2>
        <Preview>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Confirm Action"
            footer={
              <>
                <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</Button>
              </>
            }
          >
            <p className="text-sm text-nb-black opacity-80 leading-relaxed">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </Modal>
        </Preview>
        <CodeBlock
          code={`import { useState } from 'react'
import { Modal, Button } from '@k10_here/brutalistic'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
        footer={
          <>
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</Button>
          </>
        }
      >
        <p className="text-sm text-nb-black opacity-80">
          Are you sure you want to delete this item?
        </p>
      </Modal>
    </>
  )
}`}
        />
      </div>
    </div>
  )
}

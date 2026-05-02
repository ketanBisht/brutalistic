import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { DocsLayout } from './docs/components/Layout'
import { Landing } from './docs/pages/Landing'
import { Installation } from './docs/pages/Installation'
import { ButtonDoc } from './docs/pages/ButtonDoc'
import { CardDoc } from './docs/pages/CardDoc'
import { InputDoc } from './docs/pages/InputDoc'
import { CheckboxDoc } from './docs/pages/CheckboxDoc'
import { BadgeDoc } from './docs/pages/BadgeDoc'
import { AccordionDoc } from './docs/pages/AccordionDoc'
import { ModalDoc } from './docs/pages/ModalDoc'
import { ProgressDoc } from './docs/pages/ProgressDoc'
import { AlertDoc } from './docs/pages/AlertDoc'
import { SwitchDoc } from './docs/pages/SwitchDoc'
import { AvatarDoc } from './docs/pages/AvatarDoc'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocsLayout />}>
          <Route index element={<Landing />} />
          <Route path="docs/installation" element={<Installation />} />
          
          {/* Components */}
          <Route path="docs/components/accordion" element={<AccordionDoc />} />
          <Route path="docs/components/alert" element={<AlertDoc />} />
          <Route path="docs/components/avatar" element={<AvatarDoc />} />
          <Route path="docs/components/badge" element={<BadgeDoc />} />
          <Route path="docs/components/button" element={<ButtonDoc />} />
          <Route path="docs/components/card" element={<CardDoc />} />
          <Route path="docs/components/checkbox" element={<CheckboxDoc />} />
          <Route path="docs/components/input" element={<InputDoc />} />
          <Route path="docs/components/modal" element={<ModalDoc />} />
          <Route path="docs/components/progress" element={<ProgressDoc />} />
          <Route path="docs/components/switch" element={<SwitchDoc />} />
          
          {/* Redirects */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



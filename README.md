# Brutalistic 🟨⬛️

[![npm version](https://badge.fury.io/js/@k10_here%2Fbrutalistic.svg)](https://www.npmjs.com/package/@k10_here/brutalistic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Brutalistic** is a highly opinionated, unapologetic Neobrutalist UI component library for React. Built with **Tailwind CSS v4**, it features hard lines, high-contrast colors, harsh offset shadows, and absolutely zero border radius. 

If you want your web app to stand out with a bold, modern, and brutal aesthetic, this is the library for you.

## Features

- 🏗️ **Ready-to-use React Components**: Buttons, Inputs, Modals, Accordions, and more.
- 🎨 **Strict Neobrutalist Aesthetic**: Thick 2.5px borders, solid offset shadows, and high-contrast color palettes (Yellow/Black/White).
- ⚡️ **Built on Tailwind CSS v4**: Lightweight and highly compatible with modern tooling.
- 🦾 **TypeScript Ready**: First-class TS support with exported types.

---

## Installation

Install the package via npm, yarn, or pnpm:

```bash
npm install @k10_here/brutalistic
```

### Peer Dependencies
Ensure you have `react`, `react-dom`, and `react-router-dom` installed in your project, as well as `lucide-react` for the icons.

---

## Setup

To apply the required styles, you must import the CSS file at the root of your application (usually in your `main.tsx` or `App.tsx`):

```tsx
// main.tsx
import '@k10_here/brutalistic/dist/brutalistic.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## Usage

Import and use the components in your React files:

```tsx
import { Button, Card, CardHeader, CardBody, CardFooter } from '@k10_here/brutalistic';

function App() {
  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-black">Join the Brutalist Movement</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700">
            Stop making things soft and rounded. Embrace the hard edges.
          </p>
        </CardBody>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="neutral">Cancel</Button>
          <Button variant="yellow">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
```

---

## Available Components

- `Accordion`
- `Alert`
- `Avatar`
- `Badge`
- `Button`
- `Card`
- `Checkbox`
- `Input` / `Textarea`
- `Modal`
- `Progress`
- `Switch`

*More components coming soon!*

---

## Customization

Brutalistic is built using Tailwind CSS. While the components are designed to look perfect out of the box, you can override any styling by passing a standard `className` prop to any component. 

```tsx
<Button className="bg-blue-400 hover:bg-blue-500">
  Custom Blue Button
</Button>
```

---

## License

MIT © Ketan Bisht (@k10_here)

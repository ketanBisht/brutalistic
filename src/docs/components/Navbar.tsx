import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Badge } from '../../components/Badge'
import { useTheme } from '../../components/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export function Navbar() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b-[2.5px] border-nb-black bg-nb-yellow h-14 flex items-center justify-between px-6">
      <Link to="/" className="flex items-center gap-3 decoration-transparent">
        <div className="w-8 h-8 bg-nb-black flex items-center justify-center">
          <span className="text-nb-yellow font-black text-sm leading-none">B</span>
        </div>
        <span className="font-black text-lg tracking-tight text-nb-black">brutalistic</span>
        <Badge variant="black" size="sm" shadow>v0.1.1</Badge>
      </Link>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8 px-0 border-[2.5px] border-transparent hover:border-nb-black">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
        <a href="https://github.com/ketanBisht/brutalistic" target="_blank" rel="noreferrer">
          <Button variant="ghost" size="sm" className="font-bold">
            GitHub
          </Button>
        </a>
        <a href="https://www.npmjs.com/package/@k10_here/brutalistic" target="_blank" rel="noreferrer">
          <Button variant="ghost" size="sm" className="font-bold">
            npm
          </Button>
        </a>
      </div>
    </nav>
  )
}


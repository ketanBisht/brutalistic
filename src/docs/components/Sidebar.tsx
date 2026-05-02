import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'

const LINKS = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Installation', path: '/docs/installation' },
    ],
  },
  {
    title: 'Components',
    items: [
      { name: 'Accordion', path: '/docs/components/accordion' },
      { name: 'Alert', path: '/docs/components/alert' },
      { name: 'Avatar', path: '/docs/components/avatar' },
      { name: 'Badge', path: '/docs/components/badge' },
      { name: 'Button', path: '/docs/components/button' },
      { name: 'Card', path: '/docs/components/card' },
      { name: 'Checkbox', path: '/docs/components/checkbox' },
      { name: 'Input', path: '/docs/components/input' },
      { name: 'Modal', path: '/docs/components/modal' },
      { name: 'Progress', path: '/docs/components/progress' },
      { name: 'Switch', path: '/docs/components/switch' },
    ],
  },
]

export function Sidebar() {
  return (
    <aside className="w-64 border-r-[2.5px] border-nb-black h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto bg-nb-white hidden md:block">
      <div className="p-6">
        {LINKS.map((section, i) => (
          <div key={i} className="mb-8 last:mb-0">
            <h4 className="font-black text-sm uppercase tracking-wider mb-3 text-nb-black">
              {section.title}
            </h4>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-2 text-sm font-semibold transition-colors duration-100',
                      isActive
                        ? 'bg-nb-yellow border-[2.5px] border-nb-black shadow-brutal-sm translate-x-[-2px] translate-y-[-2px]'
                        : 'text-gray-600 hover:text-nb-black hover:bg-nb-gray'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

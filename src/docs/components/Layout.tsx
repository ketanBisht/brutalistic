import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export function DocsLayout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-nb-white font-sans flex flex-col">
      <Navbar />
      <div className="flex flex-1 max-w-[1440px] w-full mx-auto">
        <Sidebar />
        <main className="flex-1 py-12 px-8 max-w-4xl pb-32">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useAppStore } from '../../store/useAppStore'
import Toast from '../common/Toast'

const Layout = ({ children }) => {
  const { theme } = useAppStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main id="main-content" className="flex-1 overflow-y-auto px-8 py-6">
          {children}
        </main>
      </div>
      <Toast />
    </div>
  )
}

export default Layout

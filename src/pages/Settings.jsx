import React from 'react'
import Card from '../components/common/Card'
import { useAppStore } from '../store/useAppStore'

const Settings = () => {
  const { theme, toggleTheme } = useAppStore()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Control workspace preferences, notifications, and appearance.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-500">Appearance</h3>
          <p className="text-sm text-slate-500">Toggle light or dark mode for the console.</p>
          <button
            onClick={toggleTheme}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-500">Notification rules</h3>
          <p className="text-sm text-slate-500">Configure how admins receive alerts.</p>
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              Revenue anomalies
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              New enterprise signups
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              Weekly analytics digest
            </label>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Settings

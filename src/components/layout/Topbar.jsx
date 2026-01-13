import React, { useState } from 'react'
import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import SearchBar from '../search/SearchBar'
import { useAppStore } from '../../store/useAppStore'

const Topbar = () => {
  const { user, theme, toggleTheme, notifications, markNotificationRead, logout } = useAppStore()
  const [open, setOpen] = useState(false)

  const unreadCount = notifications.filter(note => note.unread).length

  return (
    <header className="flex items-center justify-between gap-6 border-b border-slate-200/70 bg-white/70 px-8 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <SearchBar />
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="rounded-full border border-slate-200/70 p-2 text-slate-500 transition hover:text-brand-500 dark:border-slate-700"
        >
          {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </button>
        <div className="relative">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="relative rounded-full border border-slate-200/70 p-2 text-slate-500 transition hover:text-brand-500 dark:border-slate-700"
          >
            <BellIcon className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
            )}
          </button>
          {open && (
            <div className="absolute right-0 z-30 mt-3 w-72 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase text-slate-400">Notifications</p>
              <div className="mt-3 space-y-3">
                {notifications.map(note => (
                  <button
                    key={note.id}
                    onClick={() => markNotificationRead(note.id)}
                    className="flex w-full flex-col gap-1 rounded-xl border border-slate-100 px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <span className="font-semibold text-slate-800 dark:text-white">{note.title}</span>
                    <span className="text-xs text-slate-500">{note.body}</span>
                    <span className="text-[10px] text-slate-400">{note.time}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-900">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-orange-300" />
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>
          <button
            onClick={logout}
            className="rounded-full border border-slate-200/70 px-3 py-1 text-xs font-semibold text-slate-500 transition hover:text-rose-500 dark:border-slate-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar

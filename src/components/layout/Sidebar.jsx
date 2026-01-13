import React, { useState } from 'react'
import {
  ChartBarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  CreditCardIcon,
  ArrowsRightLeftIcon,
  EnvelopeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  HomeIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Dashboard', to: '/', icon: HomeIcon },
  { name: 'User Management', to: '/users', icon: UserGroupIcon },
  { name: 'Business Management', to: '/businesses', icon: BuildingStorefrontIcon },
  { name: 'Subscriptions & Billing', to: '/billing', icon: CreditCardIcon },
  { name: 'Transactions & Refunds', to: '/transactions', icon: ArrowsRightLeftIcon },
  { name: 'Emails & Notifications', to: '/emails', icon: EnvelopeIcon },
  { name: 'Analytics', to: '/analytics', icon: ChartBarIcon },
  { name: 'Admin Roles', to: '/roles', icon: ShieldCheckIcon },
  { name: 'Settings', to: '/settings', icon: Cog6ToothIcon }
]

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`flex h-screen flex-col gap-8 border-r border-slate-200/70 bg-white/70 px-4 py-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 ${
        collapsed ? 'w-20' : 'w-72'
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-400 text-white">
            <SparklesIcon className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">Tak Business</p>
              <p className="text-xs text-slate-500">Admin Console</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(prev => !prev)}
          className="rounded-full border border-slate-200/70 p-2 text-slate-500 transition hover:text-brand-500 dark:border-slate-700"
        >
          <Bars3Icon className="h-4 w-4" />
        </button>
      </div>
      <nav className="flex-1 space-y-2">
        {links.map(link => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-brand-500 text-white shadow-soft'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`
            }
          >
            <link.icon className="h-5 w-5" />
            {!collapsed && <span>{link.name}</span>}
          </NavLink>
        ))}
      </nav>
      {!collapsed && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500/10 to-emerald-500/10 p-4 text-xs text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-800 dark:text-white">Upgrade insights</p>
          <p className="mt-1">Unlock AI forecasts and revenue intelligence.</p>
          <button className="mt-3 w-full rounded-full bg-brand-500 px-3 py-2 text-xs font-semibold text-white">
            Request demo
          </button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar

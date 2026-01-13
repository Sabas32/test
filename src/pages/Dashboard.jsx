import React from 'react'
import StatCard from '../components/common/StatCard'
import UserGrowthChart from '../components/charts/UserGrowthChart'
import RevenueChart from '../components/charts/RevenueChart'
import Card from '../components/common/Card'
import ExportPDFButton from '../components/common/ExportPDFButton'
import { useAppStore } from '../store/useAppStore'
import {
  BoltIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'

const quickCards = [
  { title: 'Today Sales', value: 'UGX 1000', icon: ChartPieIcon, tone: 'bg-blue-500/10 text-blue-500' },
  { title: 'Today Profit', value: 'UGX 1000', icon: ArrowTrendingUpIcon, tone: 'bg-purple-500/10 text-purple-500' },
  { title: 'Today Due', value: 'UGX 1000', icon: CurrencyDollarIcon, tone: 'bg-amber-500/10 text-amber-500' },
  { title: 'Today Expenses', value: 'UGX 1000', icon: BoltIcon, tone: 'bg-emerald-500/10 text-emerald-500' }
]

const actions = [
  { label: 'Stock', icon: ChartPieIcon },
  { label: 'Sales & Order', icon: CurrencyDollarIcon },
  { label: 'POS', icon: CreditCardIcon },
  { label: 'Customers', icon: UserGroupIcon },
  { label: 'Expense', icon: BoltIcon },
  { label: 'Cashflow', icon: ArrowTrendingUpIcon }
]

const Dashboard = () => {
  const { stats, userGrowth, revenueSeries } = useAppStore()

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back</p>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Tak Business Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <ExportPDFButton />
          <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
            Create report
          </button>
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="col-span-2 flex flex-col gap-6 bg-gradient-to-br from-rose-500 to-rose-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Welcome</p>
              <h2 className="text-2xl font-semibold">Khairul Islam</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-white/40 px-3 py-2 text-xs font-semibold">
                Current Shop
              </button>
              <div className="h-10 w-10 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {quickCards.map(card => (
              <div
                key={card.title}
                className="flex items-center gap-4 rounded-2xl bg-white/20 px-4 py-3"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${card.tone}`}>
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-80">{card.title}</p>
                  <p className="text-lg font-semibold">{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Quick actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {actions.map(action => (
              <button
                key={action.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200/70 bg-white py-4 text-xs font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  <action.icon className="h-5 w-5" />
                </div>
                {action.label}
              </button>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {stats.map(stat => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <UserGrowthChart data={userGrowth} />
        <RevenueChart data={revenueSeries} />
      </section>
    </div>
  )
}

export default Dashboard

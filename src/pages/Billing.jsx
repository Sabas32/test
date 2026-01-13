import React from 'react'
import Card from '../components/common/Card'
import Table from '../components/common/Table'
import { useAppStore } from '../store/useAppStore'

const Billing = () => {
  const { subscriptions } = useAppStore()

  const columns = [
    { key: 'plan', label: 'Plan' },
    { key: 'price', label: 'Price' },
    { key: 'businesses', label: 'Businesses' },
    { key: 'status', label: 'Status' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Subscriptions & billing</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Manage plans, assign businesses, and track renewal status.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-500">Revenue breakdown</h3>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">$1.3M</p>
          <p className="text-sm text-slate-500">68% from Scale & Enterprise</p>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-500">Active subscriptions</h3>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">12,479</p>
          <p className="text-sm text-slate-500">2,140 renewed this week</p>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-500">Churn risk</h3>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">4.2%</p>
          <p className="text-sm text-slate-500">Monitor low-usage accounts</p>
        </Card>
      </div>
      <Card>
        <Table columns={columns} rows={subscriptions} />
      </Card>
    </div>
  )
}

export default Billing

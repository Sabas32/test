import React from 'react'
import Card from '../components/common/Card'

const Analytics = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Analytics</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Monitor retention, churn, and business performance across segments.
      </p>
    </div>
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">User retention</h3>
        <p className="text-3xl font-semibold text-slate-900 dark:text-white">72%</p>
        <p className="text-sm text-slate-500">+4% in the last 30 days</p>
      </Card>
      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">Business performance</h3>
        <p className="text-3xl font-semibold text-slate-900 dark:text-white">$8.4M</p>
        <p className="text-sm text-slate-500">GMV across top 1k stores</p>
      </Card>
      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">Subscription churn</h3>
        <p className="text-3xl font-semibold text-slate-900 dark:text-white">3.8%</p>
        <p className="text-sm text-slate-500">Enterprise churn down 0.6%</p>
      </Card>
    </div>
    <Card className="space-y-3">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Insights</h3>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
        <li>High-growth segment: Retail businesses in Southeast Asia.</li>
        <li>Scale plan shows strongest retention after week 6.</li>
        <li>Support response time reduced by 14% this quarter.</li>
      </ul>
    </Card>
  </div>
)

export default Analytics

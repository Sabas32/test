import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import Card from '../common/Card'

const RevenueChart = ({ data }) => (
  <Card className="h-full">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Revenue & subscriptions
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Revenue and plan activations by month
        </p>
      </div>
      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
        +19% QoQ
      </span>
    </div>
    <div className="mt-6 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: '#0f172a',
              border: 'none',
              borderRadius: '12px',
              color: '#fff'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
          <Line type="monotone" dataKey="subscriptions" stroke="#60a5fa" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </Card>
)

export default RevenueChart

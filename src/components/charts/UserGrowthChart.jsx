import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import Card from '../common/Card'

const UserGrowthChart = ({ data }) => (
  <Card className="h-full">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          User growth over time
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Monthly active user growth
        </p>
      </div>
      <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400">
        +24% YoY
      </span>
    </div>
    <div className="mt-6 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a67ff" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#4a67ff" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area type="monotone" dataKey="users" stroke="#4a67ff" fill="url(#colorUsers)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Card>
)

export default UserGrowthChart

import React from 'react'
import Card from './Card'

const StatCard = ({ label, value, delta }) => (
  <Card className="flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
        {delta}
      </span>
    </div>
    <div className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</div>
  </Card>
)

export default StatCard

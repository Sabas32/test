import React from 'react'

const EmptyState = ({ title, description, action }) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300/70 bg-slate-50/70 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
    <div className="text-lg font-semibold text-slate-900 dark:text-white">{title}</div>
    <p className="text-sm">{description}</p>
    {action}
  </div>
)

export default EmptyState

import React from 'react'

const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70 ${className}`}
  >
    {children}
  </div>
)

export default Card

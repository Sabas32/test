import React from 'react'

const LoadingSkeleton = ({ lines = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className="h-4 w-full animate-pulse rounded-full bg-slate-200/70 dark:bg-slate-800"
      />
    ))}
  </div>
)

export default LoadingSkeleton

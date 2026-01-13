import React, { useEffect } from 'react'
import { useAppStore } from '../../store/useAppStore'

const toneStyles = {
  success: 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200',
  error: 'border-rose-400/40 bg-rose-500/15 text-rose-200',
  info: 'border-blue-400/40 bg-blue-500/15 text-blue-200'
}

const Toast = () => {
  const { toasts, removeToast } = useAppStore()

  useEffect(() => {
    if (toasts.length === 0) return
    const timer = setTimeout(() => removeToast(toasts[0].id), 3500)
    return () => clearTimeout(timer)
  }, [toasts, removeToast])

  return (
    <div className="fixed right-6 top-6 z-50 space-y-3">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`rounded-2xl border px-4 py-3 text-sm shadow-soft ${
            toneStyles[toast.type] || toneStyles.info
          }`}
        >
          <div className="font-semibold">{toast.title}</div>
          <div className="text-xs opacity-80">{toast.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Toast

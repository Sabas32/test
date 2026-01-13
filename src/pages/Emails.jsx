import React, { useState } from 'react'
import Card from '../components/common/Card'
import EmptyState from '../components/common/EmptyState'
import { useAppStore } from '../store/useAppStore'

const Emails = () => {
  const { addToast } = useAppStore()
  const [audience, setAudience] = useState('All users')
  const [message, setMessage] = useState('')

  const sendBroadcast = () => {
    if (!message.trim()) return
    addToast({
      id: `toast-${Date.now()}`,
      title: 'Broadcast queued',
      description: `Email queued for ${audience}.`,
      type: 'success'
    })
    setMessage('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Emails & notifications</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Send broadcasts, target by role, and reuse email templates.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Broadcast email</h3>
          <select
            value={audience}
            onChange={event => setAudience(event.target.value)}
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option>All users</option>
            <option>Business owners</option>
            <option>Scale plan subscribers</option>
            <option>Enterprise customers</option>
          </select>
          <textarea
            value={message}
            onChange={event => setMessage(event.target.value)}
            placeholder="Write your announcement..."
            rows={5}
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
          <button
            onClick={sendBroadcast}
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Send broadcast
          </button>
        </Card>
        <EmptyState
          title="Templates"
          description="Create reusable templates for onboarding, renewals, and feature updates."
          action={
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Create template
            </button>
          }
        />
      </div>
    </div>
  )
}

export default Emails

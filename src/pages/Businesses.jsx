import React, { useState } from 'react'
import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Modal from '../components/common/Modal'
import { useAppStore } from '../store/useAppStore'

const Businesses = () => {
  const { businesses, updateBusiness, addBusiness } = useAppStore()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', owner: '', plan: 'Starter', region: '' })

  const columns = [
    { key: 'name', label: 'Business' },
    { key: 'owner', label: 'Owner' },
    { key: 'plan', label: 'Plan' },
    { key: 'region', label: 'Region' },
    {
      key: 'status',
      label: 'Status',
      render: row => (
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            row.status === 'Active'
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
              : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300'
          }`}
        >
          {row.status}
        </span>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: row => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateBusiness({ ...row, status: row.status === 'Active' ? 'Suspended' : 'Active' })}
            className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-500 dark:border-slate-700"
          >
            {row.status === 'Active' ? 'Suspend' : 'Activate'}
          </button>
          <button
            onClick={() => updateBusiness({ ...row, featured: !row.featured })}
            className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-500 dark:border-slate-700"
          >
            {row.featured ? 'Unfeature' : 'Feature'}
          </button>
        </div>
      )
    }
  ]

  const addBusinessHandler = () => {
    if (!form.name || !form.owner) return
    addBusiness({
      id: `biz-${Date.now()}`,
      status: 'Active',
      featured: false,
      ...form
    })
    setForm({ name: '', owner: '', plan: 'Starter', region: '' })
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Business management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Assign owners, activate businesses, and manage featured listings.
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Add business
        </button>
      </div>

      <Card>
        <Table columns={columns} rows={businesses} />
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="Add business">
        <div className="space-y-4">
          <input
            value={form.name}
            onChange={event => setForm({ ...form, name: event.target.value })}
            placeholder="Business name"
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
          <input
            value={form.owner}
            onChange={event => setForm({ ...form, owner: event.target.value })}
            placeholder="Owner name"
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
          <input
            value={form.region}
            onChange={event => setForm({ ...form, region: event.target.value })}
            placeholder="Region"
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
          <select
            value={form.plan}
            onChange={event => setForm({ ...form, plan: event.target.value })}
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option>Starter</option>
            <option>Growth</option>
            <option>Scale</option>
            <option>Enterprise</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              onClick={addBusinessHandler}
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Save business
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Businesses

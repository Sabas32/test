import React, { useMemo, useState } from 'react'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import Table from '../components/common/Table'
import Modal from '../components/common/Modal'
import Card from '../components/common/Card'
import { useAppStore } from '../store/useAppStore'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const navigate = useNavigate()
  const { users, addUser, updateUserStatus } = useAppStore()
  const [filter, setFilter] = useState('')
  const [sortKey, setSortKey] = useState('name')
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [viewUser, setViewUser] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', plan: 'Starter' })
  const perPage = 3

  const filtered = useMemo(() => {
    return users
      .filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
  }, [users, filter, sortKey])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  const columns = [
    { key: 'name', label: 'User', render: row => (
      <div>
        <div className="font-semibold text-slate-800 dark:text-white">{row.name}</div>
        <div className="text-xs text-slate-400">{row.email}</div>
      </div>
    ) },
    { key: 'status', label: 'Status', render: row => (
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          row.status === 'Active'
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
            : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300'
        }`}
      >
        {row.status}
      </span>
    ) },
    { key: 'plan', label: 'Plan' },
    { key: 'businesses', label: 'Businesses' },
    { key: 'lastActive', label: 'Last Active' },
    {
      key: 'actions',
      label: 'Actions',
      render: row => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setViewUser(row)
              setOpen(true)
            }}
            className="rounded-full border border-slate-200/70 p-1 text-slate-500 transition hover:text-brand-500 dark:border-slate-700"
          >
            <EyeIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => navigate('/users/details')}
            className="rounded-full border border-slate-200/70 p-1 text-slate-500 transition hover:text-brand-500 dark:border-slate-700"
          >
            <PencilSquareIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => updateUserStatus(row.id, row.status === 'Active' ? 'Suspended' : 'Active')}
            className="rounded-full border border-slate-200/70 p-1 text-slate-500 transition hover:text-rose-500 dark:border-slate-700"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      )
    }
  ]

  const addUserHandler = () => {
    if (!form.name || !form.email) return
    addUser({
      id: `usr-${Date.now()}`,
      name: form.name,
      email: form.email,
      status: 'Active',
      plan: form.plan,
      businesses: 1,
      lastActive: 'Just now'
    })
    setForm({ name: '', email: '', plan: 'Starter' })
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">User Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage users, activate or suspend accounts, and review activity.
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft"
        >
          Add user
        </button>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <input
            value={filter}
            onChange={event => setFilter(event.target.value)}
            placeholder="Filter by name..."
            className="w-full max-w-xs rounded-full border border-slate-200/70 px-4 py-2 text-sm text-slate-700 outline-none focus:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          />
          <select
            value={sortKey}
            onChange={event => setSortKey(event.target.value)}
            className="rounded-full border border-slate-200/70 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <option value="name">Sort by name</option>
            <option value="plan">Sort by plan</option>
            <option value="status">Sort by status</option>
          </select>
        </div>
        <Table columns={columns} rows={paginated} />
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>
            Page {page} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
              className="rounded-full border border-slate-200/70 px-3 py-1 text-xs dark:border-slate-700"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
              className="rounded-full border border-slate-200/70 px-3 py-1 text-xs dark:border-slate-700"
            >
              Next
            </button>
          </div>
        </div>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title={viewUser ? 'User details' : 'Add user'}>
        {viewUser ? (
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
            <p>
              <span className="font-semibold">Name:</span> {viewUser.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {viewUser.email}
            </p>
            <p>
              <span className="font-semibold">Plan:</span> {viewUser.plan}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {viewUser.status}
            </p>
            <button
              onClick={() => {
                navigate('/users/details')
                setOpen(false)
              }}
              className="mt-4 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
            >
              View full profile
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              value={form.name}
              onChange={event => setForm({ ...form, name: event.target.value })}
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            />
            <input
              value={form.email}
              onChange={event => setForm({ ...form, email: event.target.value })}
              placeholder="Email"
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
                onClick={addUserHandler}
                className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Save user
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Users

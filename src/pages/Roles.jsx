import React, { useState } from 'react'
import Card from '../components/common/Card'
import Modal from '../components/common/Modal'
import Table from '../components/common/Table'
import { useAppStore } from '../store/useAppStore'
import { testAdmins } from '../data/mockData'

const Roles = () => {
  const { addRoleAdmin } = useAppStore()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'Support Admin' })
  const [admins, setAdmins] = useState(testAdmins)

  const columns = [
    { key: 'name', label: 'Admin' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    {
      key: 'permissions',
      label: 'Permissions',
      render: row => (
        <span className="text-xs text-slate-500">
          {row.permissions.includes('all') ? 'Full access' : row.permissions.join(', ')}
        </span>
      )
    }
  ]

  const addAdminHandler = () => {
    if (!form.name || !form.email || !form.password) return
    const newAdmin = {
      id: `admin-${Date.now()}`,
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
      permissions: form.role === 'Super Admin' ? ['all'] : ['users:view', 'billing:view']
    }
    setAdmins(prev => [newAdmin, ...prev])
    addRoleAdmin(newAdmin)
    setForm({ name: '', email: '', password: '', role: 'Support Admin' })
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Admin roles & permissions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Assign role-based access and manage admin credentials.
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Add admin role
        </button>
      </div>

      <Card>
        <Table columns={columns} rows={admins} />
      </Card>

      <Card className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500">Test admin accounts</h3>
        <ul className="text-sm text-slate-600 dark:text-slate-200">
          {testAdmins.map(admin => (
            <li key={admin.id} className="flex flex-col gap-1 border-b border-slate-200/70 py-2 last:border-0 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">{admin.role}</span>
              <span>Email: {admin.email}</span>
              <span>Password: {admin.password}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="Add admin role">
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
          <input
            type="password"
            value={form.password}
            onChange={event => setForm({ ...form, password: event.target.value })}
            placeholder="Password"
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
          <select
            value={form.role}
            onChange={event => setForm({ ...form, role: event.target.value })}
            className="w-full rounded-xl border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option>Support Admin</option>
            <option>Finance Admin</option>
            <option>Super Admin</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-slate-200/70 px-4 py-2 text-sm dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              onClick={addAdminHandler}
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Add admin
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Roles

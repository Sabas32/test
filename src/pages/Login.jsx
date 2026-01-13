import React, { useState } from 'react'
import { useAppStore } from '../store/useAppStore'

const Login = () => {
  const { login } = useAppStore()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = event => {
    event.preventDefault()
    login(form.email, form.password)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-400">Tak Business</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Admin sign in</h1>
          <p className="mt-2 text-sm text-slate-400">
            Use a test admin account to explore role-based dashboards.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={form.email}
            onChange={event => setForm({ ...form, email: event.target.value })}
            placeholder="Email"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
          />
          <input
            type="password"
            value={form.password}
            onChange={event => setForm({ ...form, password: event.target.value })}
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-400">
          <p className="font-semibold text-white">Test accounts</p>
          <p className="mt-2">Super Admin: super@takbusiness.com · TakSuper#2024</p>
          <p>Finance Admin: finance@takbusiness.com · TakFinance#2024</p>
          <p>Support Admin: support@takbusiness.com · TakSupport#2024</p>
        </div>
      </div>
    </div>
  )
}

export default Login

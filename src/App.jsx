import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Businesses from './pages/Businesses'
import Billing from './pages/Billing'
import Transactions from './pages/Transactions'
import Emails from './pages/Emails'
import Analytics from './pages/Analytics'
import Roles from './pages/Roles'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Card from './components/common/Card'
import { hasPermission, useAppStore } from './store/useAppStore'

const ProtectedRoute = ({ permission, children }) => {
  const { user } = useAppStore()
  if (!permission || hasPermission(user, permission)) {
    return children
  }

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="max-w-lg text-center">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Access restricted</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your role does not include permissions for this section. Contact a Super Admin to request access.
        </p>
      </Card>
    </div>
  )
}

const App = () => {
  const { user, theme } = useAppStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  if (!user) {
    return <Login />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute permission="users:view">
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="/users/details" element={<UserDetails />} />
        <Route
          path="/businesses"
          element={
            <ProtectedRoute permission="users:view">
              <Businesses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing"
          element={
            <ProtectedRoute permission="billing:view">
              <Billing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute permission="transactions:view">
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emails"
          element={
            <ProtectedRoute permission="emails:send">
              <Emails />
            </ProtectedRoute>
          }
        />
        <Route path="/analytics" element={<Analytics />} />
        <Route
          path="/roles"
          element={
            <ProtectedRoute permission="all">
              <Roles />
            </ProtectedRoute>
          }
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App

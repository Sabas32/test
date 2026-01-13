import { create } from 'zustand'
import {
  businesses,
  dashboardStats,
  revenueSeries,
  searchIndex,
  subscriptions,
  testAdmins,
  transactions,
  userGrowth,
  userTable
} from '../data/mockData'

// Centralized app state with mock API data for rapid UI prototyping.
const initialState = {
  theme: 'dark',
  user: null,
  notifications: [
    {
      id: 'note-1',
      title: 'New business signup',
      body: 'Electric Store just upgraded to Scale.',
      time: '5m ago',
      unread: true
    },
    {
      id: 'note-2',
      title: 'Refund requested',
      body: 'Zen Retail submitted a refund ticket.',
      time: '2h ago',
      unread: true
    }
  ],
  stats: dashboardStats,
  userGrowth,
  revenueSeries,
  users: userTable,
  businesses,
  subscriptions,
  transactions,
  searchIndex,
  toasts: []
}

export const useAppStore = create((set, get) => ({
  ...initialState,
  // Simple credential check against mock admin accounts.
  login: (email, password) => {
    const admin = testAdmins.find(
      account => account.email === email && account.password === password
    )

    if (!admin) {
      set(state => ({
        toasts: [
          ...state.toasts,
          {
            id: `toast-${Date.now()}`,
            title: 'Login failed',
            description: 'Check the email and password from the test admin list.',
            type: 'error'
          }
        ]
      }))
      return false
    }

    set({ user: admin })
    return true
  },
  logout: () => set({ user: null }),
  // Toggle light/dark mode at the document root.
  toggleTheme: () =>
    set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  markNotificationRead: id =>
    set(state => ({
      notifications: state.notifications.map(note =>
        note.id === id ? { ...note, unread: false } : note
      )
    })),
  addToast: toast =>
    set(state => ({ toasts: [...state.toasts, toast] })),
  removeToast: id =>
    set(state => ({ toasts: state.toasts.filter(toast => toast.id !== id) })),
  // Simulate saving a new admin role to the backend.
  addRoleAdmin: admin =>
    set(state => ({
      toasts: [
        ...state.toasts,
        {
          id: `toast-${Date.now()}`,
          title: 'Admin added',
          description: `${admin.name} can now access ${admin.role}.`,
          type: 'success'
        }
      ]
    })),
  updateUserStatus: (id, status) =>
    set(state => ({
      users: state.users.map(user =>
        user.id === id ? { ...user, status } : user
      )
    })),
  addUser: user =>
    set(state => ({ users: [user, ...state.users] })),
  updateBusiness: updated =>
    set(state => ({
      businesses: state.businesses.map(business =>
        business.id === updated.id ? updated : business
      )
    })),
  addBusiness: business =>
    set(state => ({ businesses: [business, ...state.businesses] }))
}))

export const hasPermission = (user, permission) => {
  if (!user) return false
  if (user.permissions.includes('all')) return true
  return user.permissions.includes(permission)
}

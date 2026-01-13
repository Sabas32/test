import { create } from "zustand";
import {
  adminAccounts,
  businesses as initialBusinesses,
  notifications as initialNotifications,
  roleTemplates,
  users as initialUsers
} from "../data/mockData";

// Persist theme across sessions for light/dark mode.
const getStoredTheme = () => {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("tak-theme") || "light";
};

const setStoredTheme = (theme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("tak-theme", theme);
};

// Add toast with auto-generated ID for dismissal.
const addToast = (state, toast) => {
  const id = crypto.randomUUID();
  return { toasts: [...state.toasts, { id, ...toast }] };
};

export const useAppStore = create((set, get) => ({
  theme: getStoredTheme(),
  sidebarCollapsed: false,
  currentUser: adminAccounts[0],
  adminAccounts,
  users: initialUsers,
  businesses: initialBusinesses,
  notifications: initialNotifications,
  roles: roleTemplates,
  toasts: [],
  toggleTheme: () => {
    const nextTheme = get().theme === "dark" ? "light" : "dark";
    setStoredTheme(nextTheme);
    set({ theme: nextTheme });
  },
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  dismissToast: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
  notify: (toast) => set((state) => addToast(state, toast)),
  loginAs: (id) => {
    const account = get().adminAccounts.find((user) => user.id === id) || get().adminAccounts[0];
    set({ currentUser: account });
  },
  addAdmin: (admin) =>
    set((state) => ({
      adminAccounts: [{ id: crypto.randomUUID(), ...admin }, ...state.adminAccounts]
    })),
  updateUser: (id, updates) =>
    set((state) => ({
      users: state.users.map((user) => (user.id === id ? { ...user, ...updates } : user))
    })),
  addUser: (newUser) =>
    set((state) => ({ users: [{ ...newUser, id: `USR-${Math.floor(1000 + Math.random() * 9000)}` }, ...state.users] })),
  addRole: (role) => set((state) => ({ roles: [{ id: crypto.randomUUID(), ...role }, ...state.roles] })),
  addBusiness: (business) =>
    set((state) => ({
      businesses: [{ id: `BIZ-${Math.floor(9000 + Math.random() * 900)}`, ...business }, ...state.businesses]
    })),
  updateBusiness: (id, updates) =>
    set((state) => ({
      businesses: state.businesses.map((biz) => (biz.id === id ? { ...biz, ...updates } : biz))
    })),
  addNotification: (note) =>
    set((state) => ({
      notifications: [{ id: crypto.randomUUID(), ...note }, ...state.notifications]
    }))
}));

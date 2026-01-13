import React from "react";
import { NavLink } from "react-router-dom";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  InboxArrowDownIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UsersIcon
} from "@heroicons/react/24/outline";
import { useAppStore } from "../store/useAppStore";

const navItems = [
  { name: "Overview", icon: Squares2X2Icon, path: "/" },
  { name: "Users", icon: UsersIcon, path: "/users" },
  { name: "Businesses", icon: RectangleStackIcon, path: "/businesses" },
  { name: "Subscriptions", icon: CreditCardIcon, path: "/subscriptions" },
  { name: "Transactions", icon: InboxArrowDownIcon, path: "/transactions" },
  { name: "Emails", icon: PresentationChartLineIcon, path: "/emails" },
  { name: "Analytics", icon: ChartBarIcon, path: "/analytics" },
  { name: "Roles", icon: ShieldCheckIcon, path: "/roles" },
  { name: "Settings", icon: Cog6ToothIcon, path: "/settings" }
];

const Sidebar = () => {
  const { sidebarCollapsed, toggleSidebar } = useAppStore();

  return (
    <aside
      className={`relative flex flex-col border-r border-slate-200 bg-white/80 px-4 pb-6 pt-8 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 ${
        sidebarCollapsed ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            TB
          </div>
          {!sidebarCollapsed && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">Tak</p>
              <p className="text-lg font-semibold">Business</p>
            </div>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700"
        >
          <span className="sr-only">Toggle sidebar</span>
          <div className={`h-2 w-2 rounded-full ${sidebarCollapsed ? "bg-indigo-500" : "bg-slate-400"}`} />
        </button>
      </div>

      <nav className="mt-10 flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-500"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {!sidebarCollapsed && item.name}
          </NavLink>
        ))}
      </nav>

      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-soft dark:from-slate-800 dark:to-slate-700">
        {!sidebarCollapsed ? (
          <>
            <p className="text-sm font-semibold">Need help?</p>
            <p className="mt-1 text-xs text-slate-300">Our support team is always on standby.</p>
            <button className="mt-4 w-full rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold transition hover:bg-white/20">
              Contact support
            </button>
          </>
        ) : (
          <div className="h-10" />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

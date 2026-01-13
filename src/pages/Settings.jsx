import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const Settings = () => {
  const { theme, toggleTheme, currentUser } = useAppStore();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        subtitle="Configure organization preferences, notifications, and security."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Profile</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-200">
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Name:</span> {currentUser.name}
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Role:</span> {currentUser.role}
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Email:</span> {currentUser.email}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Appearance</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Switch between light and dark themes.</p>
          <button
            onClick={toggleTheme}
            className="mt-6 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
          >
            Current: {theme}
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Weekly summary", "Billing alerts", "New signups"].map((item) => (
            <label key={item} className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-200">
              {item}
              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600" />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;

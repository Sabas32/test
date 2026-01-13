import React, { useMemo, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
import { searchItems } from "../data/mockData";
import { exportDashboardToPdf } from "../utils/exportPdf";

const Topbar = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme, notifications, currentUser } = useAppStore();

  const results = useMemo(() => {
    if (!query) return [];
    return searchItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  }, [query]);

  const handleSearchSelect = (path) => {
    setQuery("");
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (results.length > 0) {
      handleSearchSelect(results[0].path);
    }
  };

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <form onSubmit={handleSubmit} className="relative flex-1 max-w-xl">
        <span className="pointer-events-none absolute left-3 top-3 text-slate-400">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search users, businesses, pages..."
          className="w-full rounded-2xl border border-slate-200 bg-white/70 py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
        />
        {focused && results.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-900">
            {results.map((item) => (
              <button
                key={item.path}
                type="button"
                onMouseDown={() => handleSearchSelect(item.path)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400">Jump</span>
              </button>
            ))}
          </div>
        )}
      </form>

      <div className="flex items-center gap-3">
        <button
          onClick={() => exportDashboardToPdf()}
          className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 md:flex"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          Export PDF
        </button>
        <button
          onClick={toggleTheme}
          className="rounded-xl border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-800"
        >
          {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </button>

        <Menu as="div" className="relative">
          <Menu.Button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-500 shadow-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-800">
            <BellIcon className="h-5 w-5" />
          </Menu.Button>
          <Transition
            enter="transition duration-100"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft dark:border-slate-700 dark:bg-slate-900">
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Notifications</p>
              <div className="mt-3 space-y-3">
                {notifications.map((note) => (
                  <div key={note.id} className="rounded-xl border border-slate-100 p-3 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-200">
                    <p className="font-semibold text-slate-900 dark:text-white">{note.title}</p>
                    <p className="text-xs text-slate-400">{note.description}</p>
                    <p className="mt-2 text-[11px] text-slate-400">{note.time}</p>
                  </div>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500" />
            <div className="hidden text-left md:block">
              <p className="text-xs text-slate-400">{currentUser.role}</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{currentUser.name}</p>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-slate-400" />
          </Menu.Button>
          <Transition
            enter="transition duration-100"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft dark:border-slate-700 dark:bg-slate-900">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`flex w-full items-center rounded-xl px-3 py-2 text-sm ${
                      active ? "bg-indigo-50 text-indigo-600" : "text-slate-600 dark:text-slate-200"
                    }`}
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`flex w-full items-center rounded-xl px-3 py-2 text-sm ${
                      active ? "bg-indigo-50 text-indigo-600" : "text-slate-600 dark:text-slate-200"
                    }`}
                    onClick={() => navigate("/login")}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Topbar;

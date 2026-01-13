import React, { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Modal from "../components/Modal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const Roles = () => {
  const { roles, addRole, adminAccounts, notify, addAdmin } = useAppStore();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddRole = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    addRole({
      title: data.role,
      description: data.description,
      permissions: data.permissions.split(",").map((item) => item.trim())
    });
    addAdmin({
      name: data.username,
      email: data.email,
      role: data.role,
      permissions: data.permissions.split(",").map((item) => item.trim()),
      password: data.password
    });
    notify({ type: "success", title: "Role created", message: `${data.role} role added.` });
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Roles & Permissions"
        subtitle="Define access levels and assign admin accounts."
        actions={
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            <ShieldCheckIcon className="h-5 w-5" />
            Add role
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {roles.map((role) => (
          <div key={role.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">{role.title}</p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{role.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.permissions.map((permission) => (
                <span key={permission} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-200">
                  {permission}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Admin accounts</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {adminAccounts.map((admin) => (
            <div key={admin.id} className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-200">
              <p className="font-semibold text-slate-900 dark:text-white">{admin.name}</p>
              <p className="text-xs text-slate-400">{admin.email}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{admin.role}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {admin.permissions.map((permission) => (
                  <span key={permission} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-200">
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add admin role"
        footer={
          <>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="role-form"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Create role
            </button>
          </>
        }
      >
        <form id="role-form" onSubmit={handleAddRole} className="space-y-4">
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Role name
            <input
              name="role"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Description
            <input
              name="description"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Permissions (comma separated)
            <input
              name="permissions"
              required
              placeholder="users, finance, analytics"
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-xs text-indigo-500">
            Add admin credentials
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <input
                name="username"
                placeholder="Username"
                required
                className="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-xs text-indigo-600"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-xs text-indigo-600"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-xs text-indigo-600"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Roles;

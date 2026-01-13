import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import BasicTable from "../components/BasicTable.jsx";
import Modal from "../components/Modal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const Users = () => {
  const navigate = useNavigate();
  const { users, updateUser, addUser, notify, currentUser } = useAppStore();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);
  const [modalState, setModalState] = useState({ open: false, mode: "add", user: null });
  const [confirmState, setConfirmState] = useState({ open: false, user: null });

  const perPage = 4;

  const filtered = useMemo(() => {
    const result = users.filter((user) =>
      [user.name, user.email, user.id].some((field) => field.toLowerCase().includes(query.toLowerCase()))
    );
    return [...result].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [users, query, sortBy]);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  const openModal = (mode, user = null) => {
    setModalState({ open: true, mode, user });
  };

  const closeModal = () => {
    setModalState({ open: false, mode: "add", user: null });
  };

  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData.entries());

    if (modalState.mode === "edit") {
      updateUser(modalState.user.id, payload);
      notify({ type: "success", title: "User updated", message: `${payload.name} saved successfully.` });
    } else {
      addUser({ ...payload, status: "Active", businesses: 1, lastActive: "Just now" });
      notify({ type: "success", title: "User added", message: `${payload.name} was invited.` });
    }
    closeModal();
  };

  const toggleStatus = (user) => {
    const nextStatus = user.status === "Active" ? "Suspended" : "Active";
    updateUser(user.id, { status: nextStatus });
    notify({
      type: "info",
      title: `User ${nextStatus === "Active" ? "activated" : "suspended"}`,
      message: `${user.name} is now ${nextStatus.toLowerCase()}.`
    });
  };

  const handleDelete = () => {
    updateUser(confirmState.user.id, { status: "Soft Deleted" });
    notify({ type: "info", title: "User deleted", message: `${confirmState.user.name} marked as deleted.` });
    setConfirmState({ open: false, user: null });
  };

  const isSupportRole = currentUser.role === "Support Admin";

  return (
    <div className="space-y-6">
      <PageHeader
        title="User Management"
        subtitle="Search, update, and manage every account in Tak Business."
        actions={
          <button
            onClick={() => openModal("add")}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            <UserPlusIcon className="h-5 w-5" />
            Add user
          </button>
        }
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter users by name, email, or ID"
          className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <option value="name">Sort by name</option>
          <option value="status">Sort by status</option>
          <option value="role">Sort by role</option>
        </select>
      </div>

      <BasicTable
        columns={["User", "Role", "Businesses", "Last active", "Status", "Actions"]}
        data={paginated}
        emptyTitle="No users found"
        emptyDescription="Try adjusting your filters to locate accounts."
        renderRow={(user) => (
          <tr key={user.id} className="text-sm text-slate-600 dark:text-slate-200">
            <td className="px-5 py-4">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{user.name}</p>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
            </td>
            <td className="px-5 py-4">{user.role}</td>
            <td className="px-5 py-4">{user.businesses}</td>
            <td className="px-5 py-4">{user.lastActive}</td>
            <td className="px-5 py-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  user.status === "Active"
                    ? "bg-emerald-50 text-emerald-600"
                    : user.status === "Suspended"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-slate-100 text-slate-500"
                }`}
              >
                {user.status}
              </span>
            </td>
            <td className="px-5 py-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/users/${user.id}`)}
                  className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => openModal("edit", user)}
                  className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
                >
                  <PencilSquareIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => toggleStatus(user)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
                >
                  {user.status === "Active" ? "Suspend" : "Activate"}
                </button>
                <button
                  onClick={() => setConfirmState({ open: true, user })}
                  className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-rose-300 hover:text-rose-500 dark:border-slate-700"
                  disabled={!isSupportRole && currentUser.role !== "Super Admin"}
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </td>
          </tr>
        )}
      />

      <div className="flex items-center justify-between text-xs text-slate-500">
        <p>
          Showing {(page - 1) * perPage + 1} - {Math.min(page * perPage, filtered.length)} of {filtered.length} users
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(filtered.length / perPage)))}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
          >
            Next
          </button>
        </div>
      </div>

      <Modal
        open={modalState.open}
        onClose={closeModal}
        title={modalState.mode === "edit" ? "Edit user" : "Add user"}
        footer={
          <>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="user-form"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Save
            </button>
          </>
        }
      >
        <form id="user-form" onSubmit={handleSave} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Name
              <input
                name="name"
                defaultValue={modalState.user?.name}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Email
              <input
                name="email"
                type="email"
                defaultValue={modalState.user?.email}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Role
              <select
                name="role"
                defaultValue={modalState.user?.role || "Owner"}
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option>Owner</option>
                <option>Manager</option>
                <option>Finance</option>
                <option>Support</option>
              </select>
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Businesses
              <input
                name="businesses"
                defaultValue={modalState.user?.businesses || 1}
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>
        </form>
      </Modal>

      <Modal
        open={confirmState.open}
        onClose={() => setConfirmState({ open: false, user: null })}
        title="Confirm deletion"
        footer={
          <>
            <button
              type="button"
              onClick={() => setConfirmState({ open: false, user: null })}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
            >
              Delete
            </button>
          </>
        }
      >
        <p>Are you sure you want to soft delete {confirmState.user?.name}? You can restore this user later.</p>
      </Modal>
    </div>
  );
};

export default Users;

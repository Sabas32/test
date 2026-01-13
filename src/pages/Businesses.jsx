import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BuildingOffice2Icon, SparklesIcon } from "@heroicons/react/24/outline";
import BasicTable from "../components/BasicTable.jsx";
import Modal from "../components/Modal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const Businesses = () => {
  const navigate = useNavigate();
  const { businesses, addBusiness, updateBusiness, notify } = useAppStore();
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query) return businesses;
    return businesses.filter((biz) =>
      [biz.name, biz.owner, biz.id].some((field) => field.toLowerCase().includes(query.toLowerCase()))
    );
  }, [businesses, query]);

  const handleAdd = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    addBusiness({
      name: data.name,
      owner: data.owner,
      status: "Active",
      plan: data.plan,
      revenue: "$0"
    });
    notify({ type: "success", title: "Business added", message: `${data.name} added to Tak Business.` });
    setModalOpen(false);
  };

  const toggleStatus = (biz) => {
    const nextStatus = biz.status === "Active" ? "Suspended" : "Active";
    updateBusiness(biz.id, { status: nextStatus });
  };

  const featureBusiness = (biz) => {
    notify({ type: "success", title: "Business featured", message: `${biz.name} highlighted on spotlight.` });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Business Management"
        subtitle="Review businesses, assign owners, and manage storefront health."
        actions={
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            <BuildingOffice2Icon className="h-5 w-5" />
            Add business
          </button>
        }
      />

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search businesses by name, owner, or ID"
        className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />

      <BasicTable
        columns={["Business", "Owner", "Plan", "Revenue", "Status", "Actions"]}
        data={filtered}
        emptyTitle="No businesses found"
        emptyDescription="Try adjusting your search or add a business manually."
        renderRow={(biz) => (
          <tr key={biz.id} className="text-sm text-slate-600 dark:text-slate-200">
            <td className="px-5 py-4">
              <p className="font-semibold text-slate-900 dark:text-white">{biz.name}</p>
              <p className="text-xs text-slate-400">{biz.id}</p>
            </td>
            <td className="px-5 py-4">{biz.owner}</td>
            <td className="px-5 py-4">{biz.plan}</td>
            <td className="px-5 py-4">{biz.revenue}</td>
            <td className="px-5 py-4">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${biz.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                {biz.status}
              </span>
            </td>
            <td className="px-5 py-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => navigate(`/businesses/${biz.id}`)}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
                >
                  Analytics
                </button>
                <button
                  onClick={() => toggleStatus(biz)}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
                >
                  {biz.status === "Active" ? "Suspend" : "Activate"}
                </button>
                <button
                  onClick={() => featureBusiness(biz)}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
                >
                  <SparklesIcon className="h-4 w-4" />
                  Feature
                </button>
              </div>
            </td>
          </tr>
        )}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add business"
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
              form="business-form"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Save
            </button>
          </>
        }
      >
        <form id="business-form" onSubmit={handleAdd} className="space-y-4">
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Business name
            <input
              name="name"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Owner
            <input
              name="owner"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Plan
            <select
              name="plan"
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <option>Starter</option>
              <option>Growth</option>
              <option>Scale</option>
              <option>Enterprise</option>
            </select>
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default Businesses;

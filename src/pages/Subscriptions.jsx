import React from "react";
import PageHeader from "../components/PageHeader.jsx";

const plans = [
  { name: "Starter", price: "$29", description: "For early-stage teams", active: 1240 },
  { name: "Growth", price: "$79", description: "Scaling businesses", active: 3200 },
  { name: "Scale", price: "$149", description: "Revenue-focused teams", active: 1920 },
  { name: "Enterprise", price: "$299", description: "Custom pricing", active: 180 }
];

const Subscriptions = () => (
  <div className="space-y-6">
    <PageHeader
      title="Subscriptions & Billing"
      subtitle="Manage plans, track active subscriptions, and monitor revenue."
      actions={
        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500">
          Create plan
        </button>
      }
    />

    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">{plan.name}</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{plan.price}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-slate-400">Active subscriptions</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{plan.active}</p>
          </div>
          <button className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700">
            Manage plan
          </button>
        </div>
      ))}
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">Revenue breakdown</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {["Active", "Canceled", "Expired"].map((status) => (
          <div key={status} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-200">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{status}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">$320K</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Subscriptions;

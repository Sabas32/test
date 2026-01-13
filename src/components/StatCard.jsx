import React from "react";

const StatCard = ({ title, value, delta }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{title}</p>
    <div className="mt-4 flex items-center justify-between">
      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
        {delta}
      </span>
    </div>
  </div>
);

export default StatCard;

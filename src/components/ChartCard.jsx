import React from "react";

const ChartCard = ({ title, subtitle, children }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
        {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
      </div>
    </div>
    <div className="mt-6 h-72">{children}</div>
  </div>
);

export default ChartCard;

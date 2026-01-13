import React from "react";

const EmptyState = ({ title, description, action }) => (
  <div className="flex flex-col items-center justify-center gap-2 text-center">
    <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-500" />
    <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
    <p className="text-xs text-slate-400">{description}</p>
    {action}
  </div>
);

export default EmptyState;

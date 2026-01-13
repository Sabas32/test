import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "../store/useAppStore";

const Toasts = () => {
  const { toasts, dismissToast } = useAppStore();

  useEffect(() => {
    if (toasts.length === 0) return undefined;
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        dismissToast(toast.id);
      }, 4000)
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [toasts, dismissToast]);

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-soft dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <div className={`mt-1 h-2 w-2 rounded-full ${toast.type === "success" ? "bg-emerald-500" : "bg-indigo-500"}`} />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{toast.title}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{toast.message}</p>
          </div>
          <button
            onClick={() => dismissToast(toast.id)}
            className="ml-auto text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toasts;

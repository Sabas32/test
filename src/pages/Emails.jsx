import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const templates = [
  { title: "Monthly summary", description: "Performance highlights for businesses." },
  { title: "Churn prevention", description: "Automated outreach for at-risk accounts." },
  { title: "Product updates", description: "New features and tips." }
];

const Emails = () => {
  const { notify } = useAppStore();
  const [segment, setSegment] = useState("All users");

  const handleSend = (event) => {
    event.preventDefault();
    notify({
      type: "success",
      title: "Broadcast queued",
      message: `Email sent to ${segment.toLowerCase()} segment.`
    });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Emails & Notifications"
        subtitle="Send broadcasts, target segments, and manage templates."
        actions={
          <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500">
            New template
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Broadcast message</p>
          <form onSubmit={handleSend} className="mt-4 space-y-4">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Segment
              <select
                value={segment}
                onChange={(event) => setSegment(event.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option>All users</option>
                <option>Business owners</option>
                <option>Finance admins</option>
                <option>Trial accounts</option>
              </select>
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Message
              <textarea
                rows={5}
                required
                placeholder="Write a message to your customers"
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
            <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Send broadcast
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Email templates</p>
          <div className="mt-4 space-y-3">
            {templates.map((template) => (
              <div key={template.title} className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600 transition hover:border-indigo-300 dark:border-slate-800 dark:text-slate-200">
                <p className="font-semibold text-slate-900 dark:text-white">{template.title}</p>
                <p className="text-xs text-slate-400">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emails;

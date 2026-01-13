import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import PageHeader from "../components/PageHeader.jsx";

const retentionData = [
  { week: "Week 1", retention: 100 },
  { week: "Week 2", retention: 82 },
  { week: "Week 3", retention: 74 },
  { week: "Week 4", retention: 66 },
  { week: "Week 5", retention: 59 }
];

const Analytics = () => (
  <div className="space-y-6">
    <PageHeader
      title="Analytics"
      subtitle="Deep insights across user retention, business performance, and churn."
      actions={
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700">
          Download snapshot
        </button>
      }
    />

    <div className="grid gap-6 lg:grid-cols-3">
      {[
        { label: "User retention", value: "74%", trend: "+2.2%" },
        { label: "Business performance", value: "8.4x", trend: "+0.4x" },
        { label: "Subscription churn", value: "3.1%", trend: "-0.6%" }
      ].map((metric) => (
        <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
              {metric.trend}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">Retention over time</p>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={retentionData}>
            <XAxis dataKey="week" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Line type="monotone" dataKey="retention" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Analytics;

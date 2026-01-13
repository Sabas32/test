import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import ChartCard from "../components/ChartCard.jsx";
import { growthData, statsCards } from "../data/mockData";
import Skeleton from "../components/Skeleton.jsx";

const quickCards = [
  { title: "Today Sales", value: "$12,400", tone: "from-blue-100 to-indigo-50" },
  { title: "Today Profit", value: "$3,840", tone: "from-violet-100 to-purple-50" },
  { title: "Today Due", value: "$1,100", tone: "from-amber-100 to-orange-50" },
  { title: "Today Expenses", value: "$2,250", tone: "from-emerald-100 to-lime-50" }
];

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Dashboard Overview"
        subtitle="A modern command center for Tak Business operations, revenue, and growth."
        actions={
          <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500">
            Create report
          </button>
        }
      />

      <section className="grid gap-6 rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 p-8 text-white shadow-soft lg:grid-cols-[1.2fr,1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Welcome back</p>
          <h2 className="mt-3 text-3xl font-semibold">Khairul Islam</h2>
          <p className="mt-2 text-sm text-white/80">
            Electric Store is performing 18% above last week. Your AI-generated insights are ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/30">
              View live store
            </button>
            <button className="rounded-xl bg-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/30">
              Switch business
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {quickCards.map((card) => (
            <div key={card.title} className={`rounded-2xl bg-gradient-to-br ${card.tone} p-4 text-slate-900 shadow-soft`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{card.title}</p>
              <p className="mt-3 text-lg font-semibold">{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statsCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="User growth" subtitle="Monthly active users and account creation">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip />
              <Area type="monotone" dataKey="users" stroke="#6366f1" fill="url(#users)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Revenue & subscriptions" subtitle="Combined performance overview">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#22c55e" radius={[10, 10, 0, 0]} />
              <Bar dataKey="subscriptions" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Live performance feed</p>
              <p className="text-xs text-slate-400">Rolling activity from Tak Business today.</p>
            </div>
            <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700">
              View stream
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <Skeleton className="h-10 w-10" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="mt-2 h-3 w-28" />
                </div>
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">AI recommendations</p>
          <p className="text-xs text-slate-400">Next-best actions crafted for your admin team.</p>
          <div className="mt-6 space-y-4">
            {[
              "Automate renewal reminders for 14 at-risk businesses.",
              "Launch a finance summary email to 3.2K active managers.",
              "Create a custom plan for 5 high-revenue businesses."
            ].map((text) => (
              <div key={text} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600 transition hover:border-indigo-300 dark:border-slate-800 dark:text-slate-200">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

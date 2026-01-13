import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const UserDetails = () => {
  const { userId } = useParams();
  const user = useAppStore((state) => state.users.find((item) => item.id === userId));

  if (!user) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg font-semibold text-slate-900 dark:text-white">User not found</p>
        <p className="text-sm text-slate-500">We could not locate this profile.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`User: ${user.name}`}
        subtitle={`User ID ${user.id} · ${user.email}`}
        actions={
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700">
            Send message
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Activity timeline</p>
          <div className="mt-4 space-y-4">
            {["Logged in from Kampala", "Updated subscription plan", "Added new business"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-200">
                {item}
                <p className="mt-2 text-xs text-slate-400">2 hours ago</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Owned businesses</p>
          <div className="mt-4 space-y-3">
            {["Electric Store", "Tak Mart", "QuickPay"].map((biz) => (
              <div key={biz} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-200">
                {biz}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Subscription history</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Starter · $29", "Growth · $79", "Scale · $149"].map((plan) => (
            <div key={plan} className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-200">
              <p className="font-semibold text-slate-900 dark:text-white">{plan}</p>
              <p className="mt-2 text-xs text-slate-400">Active for 6 months</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

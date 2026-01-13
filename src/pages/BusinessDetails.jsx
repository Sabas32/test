import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { useAppStore } from "../store/useAppStore";

const BusinessDetails = () => {
  const { businessId } = useParams();
  const business = useAppStore((state) => state.businesses.find((item) => item.id === businessId));

  if (!business) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg font-semibold text-slate-900 dark:text-white">Business not found</p>
        <p className="text-sm text-slate-500">We could not locate this business.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={business.name}
        subtitle={`Owner: ${business.owner} · Plan: ${business.plan}`}
        actions={
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700">
            Assign owner
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Business analytics</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Monthly revenue", value: business.revenue },
              { label: "Active subscriptions", value: "1,240" },
              { label: "Avg. order value", value: "$84" },
              { label: "Churn risk", value: "Low" }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-200">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Owner details</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-200">
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Primary owner:</span> {business.owner}
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Status:</span> {business.status}
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Location:</span> Kampala, Uganda
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Recent actions</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Updated POS inventory", "Generated monthly invoice", "Added new manager"].map((activity) => (
            <div key={activity} className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-200">
              {activity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;

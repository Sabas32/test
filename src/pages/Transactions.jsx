import React, { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import BasicTable from "../components/BasicTable.jsx";
import Modal from "../components/Modal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { transactions } from "../data/mockData";
import { useAppStore } from "../store/useAppStore";

const Transactions = () => {
  const { notify } = useAppStore();
  const [modalOpen, setModalOpen] = useState(false);

  const handleRefund = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    notify({
      type: "success",
      title: "Refund initiated",
      message: `Refund of ${data.amount} sent for ${data.transaction}.`
    });
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Transactions & Refunds"
        subtitle="Track payments, manage refunds, and monitor status."
        actions={
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            <ArrowPathIcon className="h-5 w-5" />
            Manual refund
          </button>
        }
      />

      <BasicTable
        columns={["Transaction", "Business", "Amount", "Status", "Date"]}
        data={transactions}
        emptyTitle="No transactions"
        emptyDescription="Transactions will appear here once payments are processed."
        renderRow={(tx) => (
          <tr key={tx.id} className="text-sm text-slate-600 dark:text-slate-200">
            <td className="px-5 py-4">
              <p className="font-semibold text-slate-900 dark:text-white">{tx.id}</p>
            </td>
            <td className="px-5 py-4">{tx.business}</td>
            <td className="px-5 py-4">{tx.amount}</td>
            <td className="px-5 py-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  tx.status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                }`}
              >
                {tx.status}
              </span>
            </td>
            <td className="px-5 py-4">{tx.date}</td>
          </tr>
        )}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Initiate manual refund"
        footer={
          <>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="refund-form"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Send refund
            </button>
          </>
        }
      >
        <form id="refund-form" onSubmit={handleRefund} className="space-y-4">
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Transaction ID
            <input
              name="transaction"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Amount
            <input
              name="amount"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default Transactions;

import React, { useState } from 'react'
import Card from '../components/common/Card'
import Table from '../components/common/Table'
import Modal from '../components/common/Modal'
import { useAppStore } from '../store/useAppStore'

const Transactions = () => {
  const { transactions } = useAppStore()
  const [open, setOpen] = useState(false)

  const columns = [
    { key: 'id', label: 'Transaction ID' },
    { key: 'business', label: 'Business' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
    { key: 'method', label: 'Method' },
    { key: 'date', label: 'Date' },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-500 dark:border-slate-700"
        >
          Issue refund
        </button>
      )
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Transactions & refunds</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Review payments, process refunds, and track refund status.
        </p>
      </div>
      <Card>
        <Table columns={columns} rows={transactions} />
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="Manual refund">
        <p className="text-sm text-slate-600 dark:text-slate-200">
          This will issue a manual refund and notify the business owner.
        </p>
        <button
          onClick={() => setOpen(false)}
          className="w-full rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Confirm refund
        </button>
      </Modal>
    </div>
  )
}

export default Transactions

import React from 'react'
import { Dialog } from '@headlessui/react'

const Modal = ({ open, onClose, title, children }) => (
  <Dialog open={open} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-slate-900/60" aria-hidden="true" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-soft dark:bg-slate-900">
        <Dialog.Title className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </Dialog.Title>
        <div className="mt-4 space-y-4">{children}</div>
      </Dialog.Panel>
    </div>
  </Dialog>
)

export default Modal

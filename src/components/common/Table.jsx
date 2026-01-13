import React from 'react'

const Table = ({ columns, rows, emptyLabel = 'No records found.' }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800">
    <table className="min-w-full divide-y divide-slate-200/70 text-sm dark:divide-slate-800">
      <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-900">
        <tr>
          {columns.map(column => (
            <th key={column.key} className="px-4 py-3 font-semibold">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200/70 bg-white dark:divide-slate-800 dark:bg-slate-950">
        {rows.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="px-4 py-8 text-center text-slate-500">
              {emptyLabel}
            </td>
          </tr>
        ) : (
          rows.map((row, index) => (
            <tr key={row.id || index} className="transition hover:bg-slate-50/80 dark:hover:bg-slate-900/60">
              {columns.map(column => (
                <td key={column.key} className="px-4 py-3 text-slate-700 dark:text-slate-200">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
)

export default Table

import React from "react";
import EmptyState from "./EmptyState.jsx";

const BasicTable = ({ columns, data, renderRow, emptyTitle, emptyDescription }) => (
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
    <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
      <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.2em] text-slate-400 dark:bg-slate-800/60">
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-5 py-4 font-semibold">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="px-6 py-10">
              <EmptyState title={emptyTitle} description={emptyDescription} />
            </td>
          </tr>
        ) : (
          data.map((row) => renderRow(row))
        )}
      </tbody>
    </table>
  </div>
);

export default BasicTable;

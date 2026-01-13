import React, { useMemo, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../../store/useAppStore'

const SearchBar = () => {
  const navigate = useNavigate()
  const { searchIndex } = useAppStore()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []
    const lower = query.toLowerCase()
    return searchIndex.filter(item =>
      [item.label, ...item.keywords].some(entry => entry.toLowerCase().includes(lower))
    )
  }, [query, searchIndex])

  const handleSelect = route => {
    navigate(route)
    setQuery('')
    setFocused(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm transition focus-within:border-brand-300 dark:border-slate-700 dark:bg-slate-900">
        <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
        <input
          value={query}
          onChange={event => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search dashboards, users, subscriptions..."
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
        />
      </div>
      {focused && query && (
        <div className="absolute left-0 right-0 z-20 mt-2 rounded-2xl border border-slate-200/70 bg-white p-2 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          {results.length === 0 ? (
            <div className="px-3 py-2 text-xs text-slate-500">No matches. Try “billing” or “analytics”.</div>
          ) : (
            results.map(result => (
              <button
                key={result.route}
                onMouseDown={() => handleSelect(result.route)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span>{result.label}</span>
                <span className="text-xs text-slate-400">Jump</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar

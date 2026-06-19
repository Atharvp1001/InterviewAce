import { ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function DataTable({ columns, data, onRowClick = null, actions = null }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0

    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (typeof aValue === 'string') {
      return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-secondary-200 dark:border-secondary-800">
            {columns.map(col => (
              <th
                key={col.key}
                onClick={() => col.sortable && handleSort(col.key)}
                className={`px-6 py-3 text-left text-sm font-semibold text-secondary-700 dark:text-secondary-300 ${
                  col.sortable ? 'cursor-pointer hover:bg-secondary-50 dark:hover:bg-secondary-800' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  {col.label}
                  {col.sortable && sortConfig.key === col.key && (
                    sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                  )}
                </div>
              </th>
            ))}
            {actions && <th className="px-6 py-3 text-left text-sm font-semibold text-secondary-700 dark:text-secondary-300">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => onRowClick && onRowClick(row)}
              className={`border-b border-secondary-100 dark:border-secondary-800 ${
                onRowClick ? 'hover:bg-secondary-50 dark:hover:bg-secondary-800 cursor-pointer' : ''
              } transition-colors duration-200`}
            >
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4 text-sm text-secondary-700 dark:text-secondary-300">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {actions && <td className="px-6 py-4 text-sm">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>

      {sortedData.length === 0 && (
        <div className="text-center py-8">
          <p className="text-secondary-600 dark:text-secondary-400">No data available</p>
        </div>
      )}
    </div>
  )
}

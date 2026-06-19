import { Download, Eye, Trash2 } from 'lucide-react'
import DataTable from './DataTable'
import { formatDate, formatDuration, formatScore } from '../utils/formatters'
import Badge from './Badge'

export default function ReportsTable({ reports, onView = null, onDownload = null, onDelete = null }) {
  const columns = [
    { key: 'date', label: 'Date', sortable: true, render: (value) => formatDate(value) },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'difficulty', label: 'Difficulty', sortable: true, render: (value) => <Badge>{value}</Badge> },
    { key: 'score', label: 'Score', sortable: true, render: (value) => <span className="font-semibold text-primary-600 dark:text-primary-400">{formatScore(value)}</span> },
    { key: 'duration', label: 'Duration', sortable: true, render: (value) => formatDuration(value) },
  ]

  const actions = (row) => (
    <div className="flex items-center gap-2">
      {onView && (
        <button
          onClick={() => onView(row)}
          className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded transition-colors"
          aria-label="View"
        >
          <Eye size={16} className="text-primary-600" />
        </button>
      )}
      {onDownload && (
        <button
          onClick={() => onDownload(row)}
          className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded transition-colors"
          aria-label="Download"
        >
          <Download size={16} className="text-green-600" />
        </button>
      )}
      {onDelete && (
        <button
          onClick={() => onDelete(row)}
          className="p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
          aria-label="Delete"
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      )}
    </div>
  )

  return <DataTable columns={columns} data={reports} actions={actions} />
}

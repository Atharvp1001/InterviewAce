export default function ProgressBar({ value = 0, max = 100, label = null, showLabel = false, className = '' }) {
  const percentage = (value / max) * 100

  return (
    <div className={`w-full ${className}`}>
      {(label || showLabel) && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">{label}</span>
          <span className="text-sm text-secondary-600 dark:text-secondary-400">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

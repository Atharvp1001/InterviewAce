export default function LoadingSpinner({ message = 'Loading...', size = 'md' }) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-secondary-200 dark:border-secondary-700 border-t-primary-600`}></div>
      {message && <p className="text-secondary-600 dark:text-secondary-400">{message}</p>}
    </div>
  )
}

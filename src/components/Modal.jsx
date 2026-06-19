import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children, size = 'md', actions = null }) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  }

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
      <div className={`card ${sizeClasses[size]} animate-fade-in`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-secondary-900 dark:text-white">{title}</h2>
          <button onClick={onClose} className="text-secondary-500 hover:text-secondary-700 dark:hover:text-secondary-300 transition">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">{children}</div>

        {actions && <div className="flex gap-3 justify-end">{actions}</div>}
      </div>
    </div>
  )
}

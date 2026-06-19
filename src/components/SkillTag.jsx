import { X } from 'lucide-react'

export default function SkillTag({ skill, onRemove = null, score = null }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
      <span>{skill}</span>
      {score && <span className="text-xs opacity-75">({score}%)</span>}
      {onRemove && (
        <button onClick={() => onRemove(skill)} className="hover:opacity-75 transition">
          <X size={14} />
        </button>
      )}
    </div>
  )
}

import { useEffect, useState } from 'react'

export default function AnswerTextArea({ value, onChange, placeholder = 'Type your answer here...', autoSave = true }) {
  const [saveStatus, setSaveStatus] = useState('saved')
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    if (!autoSave) return

    if (timeoutId) clearTimeout(timeoutId)

    setSaveStatus('unsaved')

    const newTimeoutId = setTimeout(() => {
      setSaveStatus('saved')
    }, 1000)

    setTimeoutId(newTimeoutId)

    return () => clearTimeout(newTimeoutId)
  }, [value, autoSave])

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-secondary-700 dark:text-secondary-300">Your Answer</label>
        {autoSave && (
          <span
            className={`text-xs font-medium transition-all duration-200 ${
              saveStatus === 'saved' ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'
            }`}
          >
            {saveStatus === 'saved' ? '✓ Auto-saved' : '⧗ Saving...'}
          </span>
        )}
      </div>

      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input-field flex-1 resize-none min-h-[200px]"
      />

      <p className="text-xs text-secondary-500 dark:text-secondary-400">Minimum 10 characters to submit</p>
    </div>
  )
}

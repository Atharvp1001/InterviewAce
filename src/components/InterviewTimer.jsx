import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { formatDurationDisplay } from '../utils/formatters'

export default function InterviewTimer({ totalSeconds = 1800, onTimeUp = null }) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          if (onTimeUp) onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onTimeUp])

  const isLowTime = secondsLeft < 300
  const isCritical = secondsLeft < 60

  return (
    <div className="bg-white dark:bg-secondary-900 rounded-lg p-4 border border-secondary-200 dark:border-secondary-800">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={18} className="text-primary-600" />
        <h3 className="font-semibold text-secondary-900 dark:text-white">Time Remaining</h3>
      </div>

      <div
        className={`text-3xl font-bold text-center py-4 rounded-lg transition-all duration-300 ${
          isCritical
            ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
            : isLowTime
              ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
              : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
        }`}
      >
        {formatDurationDisplay(secondsLeft)}
      </div>

      {isCritical && <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">⚠️ Time running out!</p>}
    </div>
  )
}

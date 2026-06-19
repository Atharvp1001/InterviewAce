export default function ScoreCircle({ score = 0, maxScore = 100, size = 'lg' }) {
  const percentage = (score / maxScore) * 100

  const sizeConfig = {
    sm: { radius: 30, circumference: 188.4, width: 80, height: 80 },
    md: { radius: 45, circumference: 282.6, width: 120, height: 120 },
    lg: { radius: 60, circumference: 376.8, width: 160, height: 160 },
  }

  const config = sizeConfig[size]
  const offset = config.circumference - (percentage / 100) * config.circumference

  const textSize = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  }

  const labelSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: config.width, height: config.height }}>
        <svg width={config.width} height={config.height} className="transform -rotate-90">
          <circle
            cx={config.width / 2}
            cy={config.height / 2}
            r={config.radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-secondary-200 dark:text-secondary-700"
          />
          <circle
            cx={config.width / 2}
            cy={config.height / 2}
            r={config.radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray={config.circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${textSize[size]} font-bold text-secondary-900 dark:text-white`}>{Math.round(score)}</span>
          <span className={`${labelSize[size]} text-secondary-600 dark:text-secondary-400`}>{Math.round(percentage)}%</span>
        </div>
      </div>
    </div>
  )
}

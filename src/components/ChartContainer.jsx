import { ResponsiveContainer } from 'recharts'
import Card from './Card'

export default function ChartContainer({ title, subtitle = null, children, height = 300 }) {
  return (
    <Card>
      {title && <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{title}</h3>}
      {subtitle && <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">{subtitle}</p>}

      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

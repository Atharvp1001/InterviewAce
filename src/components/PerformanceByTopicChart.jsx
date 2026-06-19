import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import ChartContainer from './ChartContainer'

export default function PerformanceByTopicChart({ data = [] }) {
  return (
    <ChartContainer title="Performance by Topic" subtitle="Score breakdown across different topics">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="topic" stroke="#64748b" />
        <YAxis stroke="#64748b" domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Bar dataKey="score" fill="#6366f1" name="Score" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}

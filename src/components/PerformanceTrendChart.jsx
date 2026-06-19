import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import ChartContainer from './ChartContainer'

export default function PerformanceTrendChart({ data = [] }) {
  return (
    <ChartContainer title="Performance Trend" subtitle="Your interview scores over time">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#64748b" />
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
        <Line
          type="monotone"
          dataKey="score"
          stroke="#6366f1"
          strokeWidth={3}
          dot={{ fill: '#6366f1', r: 5 }}
          activeDot={{ r: 7 }}
          name="Score"
        />
      </LineChart>
    </ChartContainer>
  )
}

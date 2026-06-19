import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import ChartContainer from './ChartContainer'

export default function SkillScoresChart({ data = [] }) {
  return (
    <ChartContainer title="Skill Scores" subtitle="Performance across different skills">
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis type="number" stroke="#64748b" domain={[0, 100]} />
        <YAxis dataKey="skill" type="category" width={100} stroke="#64748b" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            color: '#f1f5f9',
          }}
        />
        <Legend />
        <Bar dataKey="score" fill="#818cf8" name="Score" radius={[0, 8, 8, 0]} />
      </BarChart>
    </ChartContainer>
  )
}

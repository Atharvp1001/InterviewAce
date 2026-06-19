import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import ChartContainer from './ChartContainer'

const COLORS = ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff']

export default function SkillDistributionChart({ data = [] }) {
  return (
    <ChartContainer title="Skill Distribution" subtitle="Breakdown of detected skills">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartContainer>
  )
}

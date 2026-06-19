import { Briefcase, TrendingUp, Target, Zap } from 'lucide-react'
import Card from '../components/Card'
import PerformanceTrendChart from '../components/PerformanceTrendChart'
import SkillDistributionChart from '../components/SkillDistributionChart'
import { mockDashboardStats, mockPerformanceData, mockSkillDistribution } from '../utils/mockData'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const statCards = [
  {
    id: 1,
    title: 'Interviews Completed',
    value: mockDashboardStats.interviewsCompleted,
    icon: Briefcase,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Average Score',
    value: `${mockDashboardStats.averageScore}%`,
    icon: TrendingUp,
    color: 'green',
  },
  {
    id: 3,
    title: 'Skills Detected',
    value: mockDashboardStats.skillsDetected,
    icon: Zap,
    color: 'amber',
  },
  {
    id: 4,
    title: 'Improvement Areas',
    value: mockDashboardStats.improvementAreas,
    icon: Target,
    color: 'red',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-secondary-600 dark:text-secondary-400">Welcome back! Here's your interview preparation progress.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map(stat => {
          const Icon = stat.icon
          const colorClasses = {
            primary: 'text-primary-600 bg-primary-100 dark:bg-primary-900/30',
            green: 'text-green-600 bg-green-100 dark:bg-green-900/30',
            amber: 'text-amber-600 bg-amber-100 dark:bg-amber-900/30',
            red: 'text-red-600 bg-red-100 dark:bg-red-900/30',
          }

          return (
            <Card key={stat.id}>
              <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color]} flex items-center justify-center mb-4`}>
                <Icon size={24} />
              </div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-secondary-900 dark:text-white">{stat.value}</p>
            </Card>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <PerformanceTrendChart data={mockPerformanceData} />
        <SkillDistributionChart data={mockSkillDistribution} />
      </div>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/resume">
            <Button variant="primary" className="w-full">
              Upload Resume
            </Button>
          </Link>
          <Link to="/interview/setup">
            <Button variant="secondary" className="w-full">
              Start Interview
            </Button>
          </Link>
          <Link to="/reports">
            <Button variant="outline" className="w-full">
              View Reports
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

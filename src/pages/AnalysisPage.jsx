import Card from '../components/Card'
import SkillTag from '../components/SkillTag'
import SkillDistributionChart from '../components/SkillDistributionChart'
import { useResume } from '../hooks/useResume'
import { mockSkillDistribution } from '../utils/mockData'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function AnalysisPage() {
  const { name, skills, strengths, missingSkills, suggestedRoles } = useResume()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Resume Analysis</h1>
        <p className="text-secondary-600 dark:text-secondary-400">Detailed insights into your resume and career opportunities.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Resume Overview</h2>
            <div className="space-y-4 text-sm text-secondary-700 dark:text-secondary-300">
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-1">Name</p>
                <p className="text-lg font-medium">{name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-1">Total Skills Detected</p>
                <p className="text-lg font-medium">{skills.length} skills</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Detected Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <SkillTag key={idx} skill={skill} />
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Your Strengths</h2>
            <ul className="space-y-3">
              {strengths.map((strength, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-secondary-700 dark:text-secondary-300">{strength}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Skills to Improve</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {missingSkills.map((skill, idx) => (
                <div key={idx} className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                  {skill}
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Focus on learning these skills to improve your interview performance and career prospects.</p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Suggested Career Paths</h2>
            <div className="space-y-3">
              {suggestedRoles.map(role => (
                <div key={role.id} className="border border-secondary-200 dark:border-secondary-700 rounded-lg p-4 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-secondary-900 dark:text-white">{role.role}</h3>
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      {role.matchScore}% match
                    </span>
                  </div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">{role.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <SkillDistributionChart data={mockSkillDistribution} />

          <Card>
            <h2 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">Next Steps</h2>
            <div className="space-y-3">
              <Link to="/interview/setup" className="block">
                <Button variant="primary" className="w-full">
                  Start Interview
                </Button>
              </Link>
              <Link to="/dashboard" className="block">
                <Button variant="secondary" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

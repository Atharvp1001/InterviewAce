import { Download, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ScoreCircle from '../components/ScoreCircle'
import Card from '../components/Card'
import Button from '../components/Button'
import DataTable from '../components/DataTable'
import PerformanceByTopicChart from '../components/PerformanceByTopicChart'
import SkillScoresChart from '../components/SkillScoresChart'
import Badge from '../components/Badge'
import { mockInterviewResults, mockQuestionBreakdown, mockPerformanceByTopic, mockSkillScores } from '../utils/mockData'

export default function ResultsPage() {
  const navigate = useNavigate()

  const handleExportPDF = () => {
    const element = document.body
    const opt = {
      margin: 10,
      filename: 'interview-results.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    }
    console.log('PDF Export feature would be implemented with html2pdf library')
  }

  const columns = [
    { key: 'id', label: '#', sortable: false, render: (value) => `Q${value}` },
    { key: 'question', label: 'Question', sortable: true },
    {
      key: 'userScore',
      label: 'Score',
      sortable: true,
      render: (value) => (
        <span className="font-semibold text-primary-600 dark:text-primary-400">
          {value}/{mockQuestionBreakdown[0].maxScore}
        </span>
      ),
    },
    { key: 'feedback', label: 'Feedback', sortable: false },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Interview Results</h1>
        <p className="text-secondary-600 dark:text-secondary-400">Congratulations! Here's your detailed performance analysis.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 flex justify-center">
          <Card>
            <div className="text-center">
              <ScoreCircle score={mockInterviewResults.score} maxScore={100} size="lg" />
              <p className="mt-6 text-sm text-secondary-600 dark:text-secondary-400">Overall Score</p>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
          <Card>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{mockInterviewResults.correct}</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Correct Answers</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600">{mockInterviewResults.partial}</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Partial Answers</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">{mockInterviewResults.incorrect}</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Incorrect</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Your Strengths</h2>
          <ul className="space-y-3">
            {mockInterviewResults.strengths.map((strength, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span className="text-secondary-700 dark:text-secondary-300">{strength}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Areas to Improve</h2>
          <ul className="space-y-3">
            {mockInterviewResults.weaknesses.map((weakness, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-amber-600 dark:text-amber-400 font-bold">!</span>
                <span className="text-secondary-700 dark:text-secondary-300">{weakness}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Recommendations</h2>
        <ul className="space-y-2">
          {mockInterviewResults.recommendations.map((rec, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-primary-600 dark:text-primary-400 font-bold">→</span>
              <span className="text-secondary-700 dark:text-secondary-300">{rec}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Question Breakdown</h2>
        <DataTable columns={columns} data={mockQuestionBreakdown} />
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        <PerformanceByTopicChart data={mockPerformanceByTopic} />
        <SkillScoresChart data={mockSkillScores} />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Button variant="outline" onClick={handleExportPDF} className="flex items-center gap-2">
          <Download size={20} />
          Export PDF
        </Button>
        <Button
          variant="primary"
          onClick={() => navigate('/interview/setup')}
          className="flex items-center gap-2"
        >
          <RotateCcw size={20} />
          Retake Interview
        </Button>
      </div>
    </div>
  )
}

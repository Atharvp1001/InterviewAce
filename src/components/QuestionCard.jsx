import Card from './Card'

export default function QuestionCard({ questionNumber, totalQuestions, question, progress }) {
  return (
    <Card>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">Question {questionNumber}</h2>
          <span className="text-sm text-secondary-600 dark:text-secondary-400">
            {questionNumber} of {totalQuestions}
          </span>
        </div>

        <div className="w-full h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">{question}</p>
      </div>
    </Card>
  )
}

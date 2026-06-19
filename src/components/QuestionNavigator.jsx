import { useInterview } from '../hooks/useInterview'

export default function QuestionNavigator() {
  const { questions, currentQuestionIndex, goToQuestion, answers } = useInterview()

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">Questions</h3>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => goToQuestion(idx)}
            className={`w-full p-3 rounded-lg text-left transition-all duration-200 text-sm font-medium ${
              idx === currentQuestionIndex
                ? 'bg-primary-600 text-white shadow-lg'
                : answers[idx]
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:shadow-md'
                  : 'bg-secondary-200 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-300 dark:hover:bg-secondary-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>Q{idx + 1}</span>
              {answers[idx] && <span className="text-xs">✓ Answered</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

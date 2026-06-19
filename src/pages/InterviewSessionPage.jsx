import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import AnswerTextArea from '../components/AnswerTextArea'
import InterviewTimer from '../components/InterviewTimer'
import QuestionNavigator from '../components/QuestionNavigator'
import Button from '../components/Button'
import LoadingSpinner from '../components/LoadingSpinner'
import { useInterview } from '../hooks/useInterview'
import { interviewService } from '../services/interviewService'

export default function InterviewSessionPage() {
  const navigate = useNavigate()
  const { questions, currentQuestionIndex, answers, goToQuestion, saveAnswer, submitInterview } = useInterview()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeUp, setTimeUp] = useState(false)

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/interview/setup')
    }
  }, [questions, navigate])

  if (questions.length === 0) {
    return <LoadingSpinner message="Loading interview..." />
  }

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex] || ''
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      goToQuestion(currentQuestionIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      goToQuestion(currentQuestionIndex + 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await interviewService.submitInterview(answers, {
        totalQuestions: questions.length,
        duration: Math.floor(Date.now() / 1000),
      })
      submitInterview()
      navigate('/results')
    } catch (error) {
      console.error('Failed to submit interview:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTimeUp = () => {
    setTimeUp(true)
  }

  if (isSubmitting) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner message="Submitting your interview..." />
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-secondary-50 dark:bg-secondary-950">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-8 flex-1 overflow-auto">
          <QuestionCard questionNumber={currentQuestionIndex + 1} totalQuestions={questions.length} question={currentQuestion.question} progress={progress} />

          <div className="mt-8">
            <AnswerTextArea value={currentAnswer} onChange={answer => saveAnswer(currentQuestionIndex, answer)} />
          </div>

          <div className="mt-8 flex gap-4 justify-between">
            <div className="flex gap-4">
              <Button variant="secondary" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                ← Previous
              </Button>
              <Button
                variant="secondary"
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next →
              </Button>
            </div>

            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={isSubmitting || timeUp}
            >
              Submit Interview
            </Button>
          </div>
        </div>
      </div>

      <div className="w-80 bg-white dark:bg-secondary-900 border-l border-secondary-200 dark:border-secondary-800 flex flex-col">
        <div className="p-6 border-b border-secondary-200 dark:border-secondary-800">
          <InterviewTimer totalSeconds={questions.length * 180} onTimeUp={handleTimeUp} />
        </div>

        <div className="p-6 flex-1 overflow-auto">
          <QuestionNavigator />
        </div>
      </div>

      {timeUp && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-secondary-900 rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">Time's Up!</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">Your interview time has ended. Submitting your answers now.</p>
            <Button variant="primary" onClick={handleSubmit} className="w-full">
              View Results
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import { ROLES, DIFFICULTIES, QUESTION_COUNTS } from '../utils/constants'
import { validateInterviewSetup } from '../utils/validators'
import { useInterview } from '../hooks/useInterview'
import { interviewService } from '../services/interviewService'
import LoadingSpinner from '../components/LoadingSpinner'

export default function InterviewSetupPage() {
  const navigate = useNavigate()
  const { startInterview, setQuestions } = useInterview()
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [selectedCount, setSelectedCount] = useState(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleStartInterview = async () => {
    const validation = validateInterviewSetup(selectedRole, selectedDifficulty, selectedCount)

    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setErrors({})
    setIsLoading(true)

    try {
      const result = await interviewService.generateQuestions(selectedRole, selectedDifficulty, selectedCount)

      startInterview(selectedRole, selectedDifficulty, selectedCount)
      setQuestions(result.questions)

      navigate('/interview')
    } catch (error) {
      setErrors({ general: 'Failed to start interview. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner message="Generating interview questions..." />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Interview Setup</h1>
        <p className="text-secondary-600 dark:text-secondary-400">Customize your interview experience by selecting role, difficulty, and number of questions.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">1. Select Role</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {ROLES.map(role => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedRole === role.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-secondary-200 dark:border-secondary-700 hover:border-secondary-300 dark:hover:border-secondary-600'
                  }`}
                >
                  <p className="font-semibold text-secondary-900 dark:text-white">{role.name}</p>
                </button>
              ))}
            </div>
            {errors.role && <p className="text-red-600 dark:text-red-400 text-sm mt-2">{errors.role}</p>}
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">2. Select Difficulty</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {DIFFICULTIES.map(difficulty => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                    selectedDifficulty === difficulty.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-secondary-200 dark:border-secondary-700 hover:border-secondary-300 dark:hover:border-secondary-600'
                  }`}
                >
                  <p className="font-semibold text-secondary-900 dark:text-white">{difficulty.name}</p>
                </button>
              ))}
            </div>
            {errors.difficulty && <p className="text-red-600 dark:text-red-400 text-sm mt-2">{errors.difficulty}</p>}
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">3. Select Number of Questions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {QUESTION_COUNTS.map(count => (
                <button
                  key={count.id}
                  onClick={() => setSelectedCount(count.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedCount === count.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-secondary-200 dark:border-secondary-700 hover:border-secondary-300 dark:hover:border-secondary-600'
                  }`}
                >
                  <p className="font-semibold text-secondary-900 dark:text-white">{count.name}</p>
                  <p className="text-xs text-secondary-600 dark:text-secondary-400 mt-1">~{count.time} min</p>
                </button>
              ))}
            </div>
            {errors.questionCount && <p className="text-red-600 dark:text-red-400 text-sm mt-2">{errors.questionCount}</p>}
          </Card>

          {errors.general && (
            <Card className="border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
              <p className="text-red-700 dark:text-red-400">{errors.general}</p>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <h2 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">Summary</h2>
            <div className="space-y-4 text-sm mb-6">
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-1">Selected Role</p>
                <p className="text-secondary-900 dark:text-white font-medium">
                  {selectedRole ? ROLES.find(r => r.id === selectedRole)?.name : 'Not selected'}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-1">Difficulty Level</p>
                <p className="text-secondary-900 dark:text-white font-medium">
                  {selectedDifficulty ? DIFFICULTIES.find(d => d.id === selectedDifficulty)?.name : 'Not selected'}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-1">Questions</p>
                <p className="text-secondary-900 dark:text-white font-medium">{selectedCount || 'Not selected'}</p>
              </div>
              <div className="pt-2 border-t border-secondary-200 dark:border-secondary-700">
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-1">Estimated Duration</p>
                <p className="text-secondary-900 dark:text-white font-medium">
                  {selectedCount ? `~${QUESTION_COUNTS.find(q => q.id === selectedCount)?.time} minutes` : '-'}
                </p>
              </div>
            </div>

            <Button variant="primary" className="w-full" onClick={handleStartInterview} disabled={isLoading}>
              Start Interview
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { createContext, useState } from 'react'

export const InterviewContext = createContext()

export function InterviewProvider({ children }) {
  const [interviewState, setInterviewState] = useState({
    role: null,
    difficulty: null,
    questionCount: null,
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    startTime: null,
    isInProgress: false,
    isSubmitted: false,
  })

  const startInterview = (role, difficulty, questionCount) => {
    setInterviewState(prev => ({
      ...prev,
      role,
      difficulty,
      questionCount,
      currentQuestionIndex: 0,
      answers: {},
      startTime: new Date(),
      isInProgress: true,
      isSubmitted: false,
    }))
  }

  const setQuestions = (questions) => {
    setInterviewState(prev => ({
      ...prev,
      questions,
    }))
  }

  const saveAnswer = (questionIndex, answer) => {
    setInterviewState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIndex]: answer,
      },
    }))
  }

  const goToQuestion = (index) => {
    setInterviewState(prev => ({
      ...prev,
      currentQuestionIndex: index,
    }))
  }

  const submitInterview = () => {
    setInterviewState(prev => ({
      ...prev,
      isInProgress: false,
      isSubmitted: true,
    }))
  }

  const resetInterview = () => {
    setInterviewState({
      role: null,
      difficulty: null,
      questionCount: null,
      questions: [],
      currentQuestionIndex: 0,
      answers: {},
      startTime: null,
      isInProgress: false,
      isSubmitted: false,
    })
  }

  return (
    <InterviewContext.Provider value={{
      ...interviewState,
      startInterview,
      setQuestions,
      saveAnswer,
      goToQuestion,
      submitInterview,
      resetInterview,
    }}>
      {children}
    </InterviewContext.Provider>
  )
}

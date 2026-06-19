import { mockInterviewQuestions, mockInterviewResults, mockQuestionBreakdown } from '../utils/mockData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const interviewService = {
  generateQuestions: async (role, difficulty, count) => {
    await delay(1200)

    const allQuestions = mockInterviewQuestions[role]?.[difficulty] || []
    const questions = allQuestions.slice(0, count).map((q, idx) => ({
      id: idx + 1,
      question: q,
      topic: ['Data Structures', 'Algorithms', 'System Design'][idx % 3],
    }))

    return {
      success: true,
      questions,
    }
  },

  saveAnswer: async (questionId, answer) => {
    await delay(300)
    return { success: true }
  },

  submitInterview: async (answers, metadata) => {
    await delay(1500)
    return {
      success: true,
      results: {
        ...mockInterviewResults,
        questionBreakdown: mockQuestionBreakdown.slice(0, Object.keys(answers).length),
      },
    }
  },

  evaluateAnswer: async (question, answer) => {
    await delay(1000)
    const scores = [7, 8, 9, 6, 8, 7, 9]
    const feedbacks = [
      'Good answer but missing some edge cases.',
      'Excellent explanation with clear examples.',
      'Correct approach but could be more concise.',
      'Right idea but implementation details need work.',
      'Strong understanding demonstrated.',
      'Partially correct, consider the alternative approach.',
      'Perfect answer with great communication.',
    ]

    const idx = Math.floor(Math.random() * feedbacks.length)

    return {
      success: true,
      score: scores[idx],
      feedback: feedbacks[idx],
    }
  },

  getInterviewHistory: async () => {
    await delay(600)
    return {
      success: true,
      interviews: [
        {
          id: 1,
          role: 'Python Developer',
          difficulty: 'Medium',
          score: 82,
          date: '2024-06-15',
        },
        {
          id: 2,
          role: 'Backend Developer',
          difficulty: 'Hard',
          score: 76,
          date: '2024-06-10',
        },
      ],
    }
  },
}

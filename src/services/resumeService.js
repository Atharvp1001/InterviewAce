import { mockResumeData, mockStrengths, mockMissingSkills, mockSuggestedRoles } from '../utils/mockData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const resumeService = {
  uploadResume: async (file) => {
    await delay(1500)
    return {
      success: true,
      fileName: file.name,
      size: file.size,
      uploadedAt: new Date(),
    }
  },

  analyzeResume: async (file) => {
    await delay(2000)
    return {
      success: true,
      data: {
        ...mockResumeData,
        strengths: mockStrengths,
        missingSkills: mockMissingSkills,
        suggestedRoles: mockSuggestedRoles,
      },
    }
  },

  getResumeAnalysis: async () => {
    await delay(600)
    return {
      success: true,
      data: {
        ...mockResumeData,
        strengths: mockStrengths,
        missingSkills: mockMissingSkills,
        suggestedRoles: mockSuggestedRoles,
      },
    }
  },

  deleteResume: async () => {
    await delay(500)
    return { success: true }
  },
}

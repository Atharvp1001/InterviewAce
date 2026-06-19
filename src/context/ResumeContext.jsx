import { createContext, useState } from 'react'

export const ResumeContext = createContext()

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    fileName: null,
    name: null,
    skills: [],
    suggestedRole: null,
    strengths: [],
    missingSkills: [],
    suggestedRoles: [],
    isUploaded: false,
    isAnalyzed: false,
  })

  const uploadResume = (file) => {
    setResumeData(prev => ({
      ...prev,
      fileName: file.name,
      isUploaded: true,
    }))
  }

  const setResumeAnalysis = (analysisData) => {
    setResumeData(prev => ({
      ...prev,
      name: analysisData.name,
      skills: analysisData.skills,
      suggestedRole: analysisData.suggestedRole,
      strengths: analysisData.strengths,
      missingSkills: analysisData.missingSkills,
      suggestedRoles: analysisData.suggestedRoles,
      isAnalyzed: true,
    }))
  }

  const clearResume = () => {
    setResumeData({
      fileName: null,
      name: null,
      skills: [],
      suggestedRole: null,
      strengths: [],
      missingSkills: [],
      suggestedRoles: [],
      isUploaded: false,
      isAnalyzed: false,
    })
  }

  return (
    <ResumeContext.Provider value={{
      ...resumeData,
      uploadResume,
      setResumeAnalysis,
      clearResume,
    }}>
      {children}
    </ResumeContext.Provider>
  )
}

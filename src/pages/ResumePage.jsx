import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import FileUploader from '../components/FileUploader'
import ProgressBar from '../components/ProgressBar'
import SkillTag from '../components/SkillTag'
import LoadingSpinner from '../components/LoadingSpinner'
import Button from '../components/Button'
import { useResume } from '../hooks/useResume'
import { resumeService } from '../services/resumeService'
import { mockResumeData } from '../utils/mockData'

export default function ResumePage() {
  const navigate = useNavigate()
  const { uploadResume, setResumeAnalysis, isUploaded, name, skills, suggestedRole } = useResume()
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState(null)

  const handleFileSelect = async (file) => {
    setError(null)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval)
          return 90
        }
        return prev + 10
      })
    }, 200)

    try {
      const result = await resumeService.uploadResume(file)
      clearInterval(interval)
      setUploadProgress(100)
      uploadResume(file)

      setIsAnalyzing(true)
      const analysisResult = await resumeService.analyzeResume(file)

      setResumeAnalysis(analysisResult.data)
      setIsAnalyzing(false)
    } catch (err) {
      setError('Failed to upload resume. Please try again.')
      setUploadProgress(0)
    }
  }

  if (isAnalyzing) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner message="Analyzing your resume..." />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Upload Your Resume</h1>
        <p className="text-secondary-600 dark:text-secondary-400">Upload your resume to get started with AI-powered interview preparation.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            {!isUploaded ? (
              <FileUploader onFileSelect={handleFileSelect} />
            ) : (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <p className="text-lg font-semibold text-secondary-900 dark:text-white">Resume Uploaded Successfully</p>
                </div>

                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div>
                    <ProgressBar value={uploadProgress} max={100} label="Upload Progress" showLabel={true} />
                  </div>
                )}

                <div className="space-y-4 pt-6">
                  <div>
                    <h3 className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-4">Detected Information</h3>
                    <div className="space-y-2 text-sm text-secondary-600 dark:text-secondary-400">
                      <p>
                        <span className="font-medium">Name:</span> {name}
                      </p>
                      <p>
                        <span className="font-medium">Suggested Role:</span> {suggestedRole}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Detected Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <SkillTag key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Button variant="secondary" onClick={() => window.location.reload()}>
                    Upload Different Resume
                  </Button>
                  <Button variant="primary" onClick={() => navigate('/analysis')}>
                    View Analysis
                  </Button>
                </div>
              </div>
            )}
          </Card>

          {error && (
            <Card className="mt-4 border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
              <p className="text-red-700 dark:text-red-400">{error}</p>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">File Requirements</h3>
            <ul className="space-y-3 text-sm text-secondary-600 dark:text-secondary-400">
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>PDF format only</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Maximum size: 5MB</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Clearly formatted</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Recent/up-to-date</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Include skills section</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

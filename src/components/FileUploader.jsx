import { useState } from 'react'
import { Upload, FileText } from 'lucide-react'
import { validateFile } from '../utils/validators'

export default function FileUploader({ onFileSelect, accept = '.pdf', maxSize = 5 }) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState(null)
  const [file, setFile] = useState(null)

  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      handleFile(droppedFiles[0])
    }
  }

  const handleFile = (selectedFile) => {
    const validation = validateFile(selectedFile, ['application/pdf'])

    if (!validation.valid) {
      setError(validation.error)
      setFile(null)
      return
    }

    setError(null)
    setFile(selectedFile)
    onFileSelect(selectedFile)
  }

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0])
    }
  }

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
        isDragging ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-secondary-300 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-900/50'
      }`}
    >
      {!file ? (
        <>
          <Upload className="mx-auto mb-4 text-primary-600" size={32} />
          <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">Upload your resume</h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">Drag and drop your PDF file here or click to browse</p>
          <input type="file" accept={accept} onChange={handleInputChange} className="hidden" id="file-input" />
          <label htmlFor="file-input" className="btn-primary cursor-pointer inline-block">
            Choose File
          </label>
          <p className="text-sm text-secondary-500 dark:text-secondary-500 mt-2">Maximum file size: {maxSize}MB</p>
        </>
      ) : (
        <>
          <FileText className="mx-auto mb-4 text-green-600" size={32} />
          <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">{file.name}</h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">{(file.size / 1024 / 1024).toFixed(2)}MB</p>
          <button onClick={() => setFile(null)} className="btn-outline inline-block">
            Choose Different File
          </button>
        </>
      )}
      {error && <p className="text-red-600 dark:text-red-400 mt-4 text-sm">{error}</p>}
    </div>
  )
}

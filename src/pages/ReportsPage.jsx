import { useState } from 'react'
import Card from '../components/Card'
import ReportsTable from '../components/ReportsTable'
import LoadingSpinner from '../components/LoadingSpinner'
import { reportService } from '../services/reportService'
import { mockReports } from '../utils/mockData'
import Modal from '../components/Modal'
import Button from '../components/Button'

export default function ReportsPage() {
  const [reports, setReports] = useState(mockReports)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedReport, setSelectedReport] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleView = (report) => {
    setSelectedReport(report)
    setIsModalOpen(true)
  }

  const handleDownload = async (report) => {
    setIsLoading(true)
    try {
      await reportService.generatePDF(report.id)
      console.log(`PDF for report ${report.id} would be downloaded`)
    } catch (error) {
      console.error('Failed to download PDF:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (report) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      setIsLoading(true)
      try {
        await reportService.deleteReport(report.id)
        setReports(reports.filter(r => r.id !== report.id))
      } catch (error) {
        console.error('Failed to delete report:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  if (isLoading && reports.length === 0) {
    return <LoadingSpinner message="Loading reports..." />
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Interview Reports</h1>
        <p className="text-secondary-600 dark:text-secondary-400">View and manage all your interview session reports.</p>
      </div>

      <Card>
        {reports.length > 0 ? (
          <ReportsTable
            reports={reports}
            onView={handleView}
            onDownload={handleDownload}
            onDelete={handleDelete}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">No interview reports yet.</p>
            <p className="text-sm text-secondary-500 dark:text-secondary-500">Complete an interview to generate your first report.</p>
          </div>
        )}
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedReport ? `Interview Report - ${selectedReport.role}` : 'Report Details'}
        size="lg"
      >
        {selectedReport && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">Date</p>
                <p className="text-secondary-900 dark:text-white font-medium">{selectedReport.date}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">Role</p>
                <p className="text-secondary-900 dark:text-white font-medium">{selectedReport.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">Score</p>
                <p className="text-secondary-900 dark:text-white font-medium text-lg text-primary-600">{selectedReport.score}%</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">Duration</p>
                <p className="text-secondary-900 dark:text-white font-medium">{selectedReport.duration} minutes</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">Difficulty</p>
                <p className="text-secondary-900 dark:text-white font-medium">{selectedReport.difficulty}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">Questions</p>
                <p className="text-secondary-900 dark:text-white font-medium">{selectedReport.questionCount}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

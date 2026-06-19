import { mockReports } from '../utils/mockData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const reportService = {
  getReports: async (filters = {}) => {
    await delay(700)
    let reports = [...mockReports]

    if (filters.role) {
      reports = reports.filter(r => r.role === filters.role)
    }
    if (filters.minScore) {
      reports = reports.filter(r => r.score >= filters.minScore)
    }
    if (filters.difficulty) {
      reports = reports.filter(r => r.difficulty === filters.difficulty)
    }

    return {
      success: true,
      reports,
      total: reports.length,
    }
  },

  getReportDetails: async (reportId) => {
    await delay(600)
    const report = mockReports.find(r => r.id === reportId)
    return {
      success: true,
      report,
    }
  },

  generatePDF: async (reportId) => {
    await delay(2000)
    return {
      success: true,
      pdfUrl: `/reports/${reportId}.pdf`,
      fileName: `Interview_Report_${reportId}.pdf`,
    }
  },

  deleteReport: async (reportId) => {
    await delay(500)
    return { success: true }
  },

  exportReports: async () => {
    await delay(1500)
    return {
      success: true,
      csvUrl: '/reports/all-reports.csv',
      fileName: 'interview-reports.csv',
    }
  },

  getStatistics: async () => {
    await delay(800)
    return {
      success: true,
      stats: {
        totalInterviews: mockReports.length,
        averageScore: Math.round(
          mockReports.reduce((sum, r) => sum + r.score, 0) / mockReports.length
        ),
        bestScore: Math.max(...mockReports.map(r => r.score)),
        worstScore: Math.min(...mockReports.map(r => r.score)),
        totalDuration: mockReports.reduce((sum, r) => sum + r.duration, 0),
      },
    }
  },
}

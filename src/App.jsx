import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { InterviewProvider } from './context/InterviewContext'
import { ResumeProvider } from './context/ResumeContext'

import MainLayout from './layouts/MainLayout'
import LandingLayout from './layouts/LandingLayout'
import InterviewLayout from './layouts/InterviewLayout'

import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import ResumePage from './pages/ResumePage'
import AnalysisPage from './pages/AnalysisPage'
import InterviewSetupPage from './pages/InterviewSetupPage'
import InterviewSessionPage from './pages/InterviewSessionPage'
import ResultsPage from './pages/ResultsPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <InterviewProvider>
          <ResumeProvider>
            <Router>
              <Routes>
                <Route element={<LandingLayout />}>
                  <Route path="/" element={<LandingPage />} />
                </Route>

                <Route element={<MainLayout />}>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/analysis" element={<AnalysisPage />} />
                  <Route path="/interview/setup" element={<InterviewSetupPage />} />
                  <Route path="/results" element={<ResultsPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Route>

                <Route element={<InterviewLayout />}>
                  <Route path="/interview" element={<InterviewSessionPage />} />
                </Route>
              </Routes>
            </Router>
          </ResumeProvider>
        </InterviewProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

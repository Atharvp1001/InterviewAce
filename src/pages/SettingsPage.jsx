import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import ThemeToggle from '../components/ThemeToggle'
import { useAuth } from '../hooks/useAuth'

export default function SettingsPage() {
  const navigate = useNavigate()
  const { user, updateProfile, logout } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
  })
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    interviewReminders: true,
    weeklyReports: false,
  })
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSaveProfile = async () => {
    setIsSaving(true)
    try {
      updateProfile(formData)
      alert('Profile updated successfully!')
    } catch (error) {
      alert('Failed to update profile')
    } finally {
      setIsSaving(false)
    }
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout()
      navigate('/')
    }
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">Settings</h1>
        <p className="text-secondary-600 dark:text-secondary-400">Manage your account preferences and application settings.</p>
      </div>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">Profile Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="input-field"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="pt-4">
            <Button variant="primary" onClick={handleSaveProfile} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">Appearance</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-secondary-900 dark:text-white">Dark Mode</p>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Toggle dark mode on/off</p>
          </div>
          <ThemeToggle />
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">Notification Settings</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.emailNotifications}
              onChange={() => handleNotificationChange('emailNotifications')}
              className="w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <p className="font-medium text-secondary-900 dark:text-white">Email Notifications</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">Receive email notifications about your activity</p>
            </div>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.interviewReminders}
              onChange={() => handleNotificationChange('interviewReminders')}
              className="w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <p className="font-medium text-secondary-900 dark:text-white">Interview Reminders</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">Get reminded to practice interviews regularly</p>
            </div>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.weeklyReports}
              onChange={() => handleNotificationChange('weeklyReports')}
              className="w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <p className="font-medium text-secondary-900 dark:text-white">Weekly Reports</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">Receive a weekly summary of your performance</p>
            </div>
          </label>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">About InterviewAce</h2>
        <div className="space-y-4 text-secondary-700 dark:text-secondary-300">
          <div>
            <p className="font-medium mb-1">Version</p>
            <p className="text-sm">1.0.0</p>
          </div>
          <div>
            <p className="font-medium mb-1">Description</p>
            <p className="text-sm">AI-powered interview preparation platform to help you ace your interviews.</p>
          </div>
          <div>
            <p className="font-medium mb-1">Contact</p>
            <p className="text-sm">support@interviewace.com</p>
          </div>
          <div>
            <p className="font-medium mb-1">Website</p>
            <p className="text-sm">www.interviewace.com</p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
        <h2 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">Danger Zone</h2>
        <p className="text-red-800 dark:text-red-400 mb-6">Proceed with caution. These actions cannot be undone.</p>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </div>
  )
}

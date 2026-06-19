import { Menu, LogOut, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useAuth } from '../hooks/useAuth'

export default function Navbar({ onMenuClick, isSidebarOpen }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <nav className="bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800 px-8 py-4 flex items-center justify-between sticky top-0 z-40 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} className="text-secondary-700 dark:text-secondary-300" />
        </button>
        <h1 className="text-xl font-bold text-secondary-900 dark:text-white">InterviewAce</h1>
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggle />

        <div className="flex items-center gap-4 pl-6 border-l border-secondary-200 dark:border-secondary-800">
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium text-secondary-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-secondary-600 dark:text-secondary-400">{user?.email}</p>
          </div>

          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {user?.avatar}
          </div>

          <div className="relative group">
            <button className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors duration-200">
              <Settings size={20} className="text-secondary-700 dark:text-secondary-300" />
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 border border-secondary-200 dark:border-secondary-800">
              <Link to="/settings" className="block px-4 py-2 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 first:rounded-t-lg">
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 last:rounded-b-lg flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

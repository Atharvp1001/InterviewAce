import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, FileText, Brain, BarChart3, Settings as SettingsIcon } from 'lucide-react'

const sidebarItems = [
  { id: 1, name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { id: 2, name: 'Resume Upload', path: '/resume', icon: FileText },
  { id: 3, name: 'Resume Analysis', path: '/analysis', icon: Brain },
  { id: 4, name: 'Interview Setup', path: '/interview/setup', icon: Brain },
  { id: 5, name: 'Reports', path: '/reports', icon: BarChart3 },
  { id: 6, name: 'Settings', path: '/settings', icon: SettingsIcon },
]

export default function Sidebar({ isOpen }) {
  const location = useLocation()

  return (
    <aside
      className={`bg-white dark:bg-secondary-900 border-r border-secondary-200 dark:border-secondary-800 h-screen transition-all duration-300 overflow-hidden fixed left-0 top-0 pt-20 z-30 ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >
      <nav className="p-4 space-y-2">
        {sidebarItems.map(item => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

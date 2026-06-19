import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-secondary-700" />}
    </button>
  )
}

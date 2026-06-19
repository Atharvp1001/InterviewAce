import { Outlet } from 'react-router-dom'

export default function InterviewLayout() {
  return (
    <div className="flex h-screen bg-secondary-50 dark:bg-secondary-950">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

import { Outlet } from 'react-router-dom'

export default function LandingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-secondary-950">
      <Outlet />
    </div>
  )
}

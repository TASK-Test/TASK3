import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <span>Task App</span>
        <Link to="/tasks"> Tasks</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
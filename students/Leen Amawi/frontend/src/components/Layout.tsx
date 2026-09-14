import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Task App</span>
       <NavLink  to="/tasks" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Tasks</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
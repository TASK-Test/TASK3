
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

function Layout() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div>
      <nav>
        <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Task App</span>
        <NavLink  to="/tasks" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})} >Tasks</NavLink>
        <button type="button" onClick={handleLogout} style={{ marginLeft: '10px' }}> Logout</button>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout


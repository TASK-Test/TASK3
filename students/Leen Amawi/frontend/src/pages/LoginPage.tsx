import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username.trim()) {
      setError('Username is required')
      return
    }

    if (!password) {
      setError('Password is required')
      return
    }

    try {
      setError('')
      await login(username, password)
      navigate('/tasks')
    } catch {
      setError('Invalid username or password')
    }
  }
return (
  <div className="auth-page">
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && <p className="auth-error">{error}</p>}

      <div className="auth-field">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>

      <div className="auth-field">
        <label>Password</label>
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <button className="auth-button" type="submit">Login </button>
    </form>
  </div>
)
}
export default LoginPage
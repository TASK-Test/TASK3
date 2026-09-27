import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../auth/auth'

function RegisterPage() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username.trim()) {
      setError('Username is required')
      return
    }

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!password) {
      setError('Password is required')
      return
    }

    try {
      setError('')

      await register(
        username,
        email,
        password,
        displayName
      )
      navigate('/login')
    } catch {
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {error && <p className="auth-error">{error}</p>}

        <div className="auth-field">
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="auth-field">
          <label>Email</label>
          <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="auth-field">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="auth-field">
          <label>Display name</label>
          <input value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
        </div>
        <button className="auth-button" type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
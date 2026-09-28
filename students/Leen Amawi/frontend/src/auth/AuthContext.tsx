import { createContext, useContext, useState } from 'react'
import { getToken, login as authLogin, logout as authLogout } from './auth'

type AuthContextType = {
  isAuthenticated: boolean
  currentUser: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState( getToken() !== null)
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const login = async (username: string, password: string) => {
    await authLogin(username, password)
    setIsAuthenticated(true)
    setCurrentUser(username)
  }

  const logout = () => {
    authLogout()
    setIsAuthenticated(false)
    setCurrentUser(null)
  }
  return (
    <AuthContext.Provider value={{isAuthenticated,currentUser,login,logout, }}>{children} </AuthContext.Provider>
  )
}
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
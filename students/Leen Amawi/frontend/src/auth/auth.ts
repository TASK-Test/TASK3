import {login as apiLogin,register as apiRegister,} from '../api/client'

const TOKEN_KEY = 'token'

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY)
}

export async function login(username: string,password: string): Promise<string> {
  const data = await apiLogin(username, password)
  setToken(data.token)
  return data.token
}

export async function register(username: string,email: string,password: string,displayName?: string) {
  return apiRegister({
    username,
    email,
    password,
    displayName,
  })
}
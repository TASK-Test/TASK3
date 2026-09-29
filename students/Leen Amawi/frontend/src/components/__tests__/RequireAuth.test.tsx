import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import RequireAuth from '../RequireAuth'
import { useAuth } from '../../auth/AuthContext'

vi.mock('../../auth/AuthContext', () => ({useAuth: vi.fn(),}))

const mockedUseAuth = vi.mocked(useAuth)

describe('RequireAuth', () => {
  it('redirects logged-out users to /login', () => {
    mockedUseAuth.mockReturnValue({
      isAuthenticated: false,
      currentUser: null,
      login: vi.fn(),
      logout: vi.fn(),
    })

    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/tasks" element={<div>Tasks page</div>} />
          </Route>
          <Route path="/login" element={<div>Login page</div>} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Login page')).toBeInTheDocument()
  })

  it('renders protected page when logged in', () => {
    mockedUseAuth.mockReturnValue({
      isAuthenticated: true,
      currentUser: 'demo',
      login: vi.fn(),
      logout: vi.fn(),
    })

    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/tasks" element={<div>Tasks page</div>} />
          </Route>

          <Route path="/login" element={<div>Login page</div>} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Tasks page')).toBeInTheDocument()
  })
})

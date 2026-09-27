import type { Task } from "../types/task";
const API = import.meta.env.VITE_API_URL;
import { getToken, logout } from '../auth/auth'

export type LoginResponse = {
  token: string
}

export type RegisterPayload = {
  username: string
  email: string
  password: string
  displayName?: string
}

export type RegisterResponse = {
  id: number
  username: string
  email: string
  displayName: string
  role: string
}

export async function login(username: string,password: string): Promise<LoginResponse> {
  const response = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username,password,}),
  })
  return handleResponse<LoginResponse>(response)
}
export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
  const response = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  return handleResponse<RegisterResponse>(response)
}

export type ApiFieldErrors = Record<string, string>;
export class ApiError extends Error {
  status: number;
  fieldErrors: ApiFieldErrors;

  constructor(status: number,message: string,fieldErrors: ApiFieldErrors = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}
async function authFetch(url: string,options: RequestInit = {}): Promise<Response> {
  const token = getToken()
  const headers = new Headers(options.headers)
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  const response = await fetch(url, {...options, headers,})
  if (response.status === 401 && !url.includes('/auth/')) {
    logout()
    window.location.href = '/login'
  }
  return response
}


async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let body: {
      message?: string
      fieldErrors?: ApiFieldErrors
    } = {}

    try {
      body = await response.json()
    } catch {
    }
    throw new ApiError( response.status,body.message ?? `Request failed with status ${response.status}`,body.fieldErrors ?? {})
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json()
}

export async function getTasks(): Promise<Task[]> {
  const response = await authFetch(`${API}/tasks`);
 return handleResponse<Task[]>(response);
}

export async function getTask(id: number): Promise<Task> {
  const response = await authFetch(`${API}/tasks/${id}`);
  return handleResponse<Task>(response);
}


export type CreateTaskPayload = {
  title: string
  description: string
  statusId: number
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  targetDate: string
}
export async function createTask(payload: CreateTaskPayload): Promise<Task> {
  const response = await authFetch(`${API}/tasks`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
  })

  return handleResponse<Task>(response)
}
export async function updateTask(id: number, payload: CreateTaskPayload): Promise<Task> {
  const response = await authFetch(`${API}/tasks/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
  })

  return handleResponse<Task>(response)
}
export async function deleteTask(id: number): Promise<void> {
  const response = await authFetch(`${API}/tasks/${id}`, {
    method: 'DELETE',
  })
  return handleResponse<void>(response)
}
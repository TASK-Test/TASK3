import type { Task } from "../types/task";
const API = import.meta.env.VITE_API_URL;

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
  const response = await fetch(`${API}/tasks`);
 return handleResponse<Task[]>(response);
}

export async function getTask(id: number): Promise<Task> {
  const response = await fetch(`${API}/tasks/${id}`);


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
  const response = await fetch(`${API}/tasks`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
  })

  return handleResponse<Task>(response)
}
export async function updateTask(id: number, payload: CreateTaskPayload): Promise<Task> {
  const response = await fetch(`${API}/tasks/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
  })

  return handleResponse<Task>(response)
}
export async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${API}/tasks/${id}`, {
    method: 'DELETE',
  })
  return handleResponse<void>(response)
}
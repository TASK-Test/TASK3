const BASE_URL: string = import.meta.env.VITE_API_URL;
import type { Status, Task, TaskRequest } from "../types/task";
import { ApiError, type ApiErrorBody } from "./ApiError";

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    let errorBody: ApiErrorBody;
    try {
      errorBody = await response.json();
    } catch {
      throw new ApiError(response.status, "Could not connect to the server");
    }
    if (errorBody.status === 400 && errorBody.fieldErrors)
      throw new ApiError(
        errorBody.status,
        errorBody.message,
        errorBody.fieldErrors,
      );
    throw new ApiError(errorBody.status, errorBody.message);
  }
  if (response.status === 204) return undefined as T;

  return response.json();
};

const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return handleResponse(response);
};
const getTask = async (id: number): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`);
  return handleResponse(response);
};
const getStatuses = async (): Promise<Status[]> => {
  const response = await fetch(`${BASE_URL}/statuses`);
  return handleResponse(response);
};
const createTask = async (payload: TaskRequest): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
};
const updateTask = async (id: number, payload: TaskRequest): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
};

const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};
export { getTasks, getTask, getStatuses, createTask, updateTask, deleteTask };

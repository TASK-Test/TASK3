const BASE_URL: string = "/api";
import type { Status, Task, TaskRequest } from "../types/task";

const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error("could not fetch tasks");
  }
  return response.json();
};
const getTask = async (id: number): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`);
  if (response.status === 404) {
    throw new Error("Task is not found");
  } else if (!response.ok) {
    throw new Error("something went wrong :(");
  }
  return response.json();
};
const getStatuses = async (): Promise<Status[]> => {
  const response = await fetch(`${BASE_URL}/statuses`);
  if (!response.ok) {
    throw new Error("could not bring statuses");
  }
  return response.json();
};
const createTask = async (payload: TaskRequest): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "something wrong!");
  }
  return response.json();
};
const updateTask = async (id: number, payload: TaskRequest): Promise<Task> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "could not update task");
  }
  return response.json();
};

const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "could not delete task");
  }
};
export { getTasks, getTask, getStatuses, createTask, updateTask, deleteTask };

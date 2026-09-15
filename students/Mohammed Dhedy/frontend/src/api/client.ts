const BASE_URL: string = "/api";
import type { Task } from "../types/task";

const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error("something went wrong :(");
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
export { getTasks, getTask };

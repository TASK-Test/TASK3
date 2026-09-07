import type { Task } from "./domain";
const tasksJson= `[
  {
    "id": 1,
    "title": "Fix login",
    "priority": "HIGH",
    "targetDate": "2026-09-10",
    "status": {
      "id": 1,
      "name": "Backlog",
      "position": 1
    },
    "createdBy": {
      "id": 1,
      "username": "leen",
      "email": "leen@example.com",
      "passwordHash": "hash",
      "role": "USER",
      "createdAt": "2026-09-07"
    },
    "createdAt": "2026-09-07",
    "updatedAt": "2026-09-07"
  }
]`;
export async function fetchTasks(): Promise<Task[]> {
  await new Promise((res) => setTimeout(res, 200));

  const tasks: Task[]= JSON.parse(tasksJson);
  return tasks;
}
export async function fetchTaskById(id: number): Promise<Task> {
  const tasks = await fetchTasks();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  return task;
}
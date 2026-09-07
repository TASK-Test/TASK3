import type { Task } from "./domain";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchTasks(): Promise<Task[]> {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.status}`);
    }
  const todos: Todo[] = await response.json();
  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    status: {
      id: 1,
      name: todo.completed ? "Done" : "Backlog",
      position: 1,
    },
    priority: "LOW",
    targetDate: "2026-09-10",
    createdBy: {
      id: todo.userId,
      username: `user${todo.userId}`,
      email: `user${todo.userId}@example.com`,
      passwordHash: "mock-hash",
      role: "USER",
      createdAt: "2026-09-07T10:00:00Z",
    },
    createdAt: "2026-09-07",
    updatedAt: "2026-09-07",
  }));
}
export async function fetchTaskById(id: number): Promise<Task> {
  const tasks = await fetchTasks();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  return task;}

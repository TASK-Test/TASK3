import type { User, Status, Task } from "./domain";
import { InMemoryStore, byField } from "./store";
import { fetchTasks, fetchTaskById } from "./api";

const user: User = {
  id: 1,
  username: "leen",
  email: "leen@example.com",
  displayName: "Leen Amawi",
  passwordHash: "hashed-password",
  role: "USER",
  createdAt: "2026-09-06T10:00:00Z",
};
const backlog: Status = {
  id: 1,
  name: "Backlog",
  position: 1,
  color: "#808080",
};

const done: Status = {
  id: 2,
  name: "Done",
  position: 2,
  color: "#00FF00",
};

const task1: Task = {
  id: 1,
  title: "Fix login",
  description: "Fix the login issue",
  status: backlog,
  priority: "HIGH",
  targetDate: "2026-09-10",
  createdBy: user,
  createdAt: "2026-09-06T10:00:00Z",
  updatedAt: "2026-09-06T10:00:00Z",
};

const task2: Task = {
  id: 2,
  title: "Read documentation",
  status: done,
  priority: "LOW",
  targetDate: "2026-09-12",
  createdBy: user,
  createdAt: "2026-09-06T10:30:00Z",
  updatedAt: "2026-09-06T10:30:00Z",
};
const taskStore = new InMemoryStore<Task>();
taskStore.add(task1);
taskStore.add(task2);

const highPriorityTasks = byField( taskStore.getAll(),"priority","HIGH");

console.log("High priority tasks:");
console.log(highPriorityTasks);

async function main(): Promise<void> {
  const tasks = await fetchTasks();

  console.log("Task titles:");

  tasks.forEach((task) => {
  console.log(task.title);});

  try {
  await fetchTaskById(999);
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
function serialize(task: Task): string {
  return  JSON.stringify(task);
}

const firstTask = tasks[0];
if (firstTask) {
  const json = serialize(firstTask);
  console.log("Serialized task:");
  console.log(json);
  const parsed: Task = JSON.parse(json);
  console.log("Round-trip title:", parsed.title);
}
}
main();


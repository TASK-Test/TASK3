import type { User, Task, Status } from "./domain";
import { InMemoryStore, byField } from "./store";
import { fetchTasks, fetchTaskById } from "./api";

const repository: InMemoryStore<Task> = new InMemoryStore<Task>();

const user: User = {
  id: 1,
  username: "mhmd04",
  email: "mhmddhedy1234@gmail.com",
  displayName: "mohammed dhedy",
  role: "USER",
  createdAt: new Date().toISOString(),
};

const doneStatus: Status = {
  id: 1,
  name: "Done",
  position: 3,
  color: "rgb(0, 255, 17)",
};
const inProgressStatus: Status = {
  id: 2,
  name: "In Progress",
  position: 2,
  color: "rgb(0, 60, 255)",
};
const backLogStatus: Status = {
  id: 3,
  name: "backlog",
  position: 1,
  color: "rgb(255, 0, 0)",
};

const task1: Task = {
  id: 1,
  title: "study typescript",
  description: "study generics and interfaces in typescript",
  status: doneStatus,
  createdBy: user,
  priority: "HIGH",
  targetDate: new Date(Date.now() + 5000).toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
const task2: Task = {
  id: 2,
  title: "play games",
  description: "play some games and have fun",
  status: backLogStatus,
  createdBy: user,
  priority: "LOW",
  targetDate: new Date(Date.now() + 11000).toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
const task3: Task = {
  id: 3,
  title: "sleep",
  description: "sleep and have some rest",
  status: inProgressStatus,
  createdBy: user,
  priority: "HIGH",
  targetDate: new Date(Date.now() + 20000).toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
repository.add(task1);
repository.add(task2);
repository.add(task3);

const highTasks: Task[] = byField(repository.getAll(), "priority", "HIGH");

console.log(highTasks);

// ==================================DAY 13========================
const fetchedTasks: Task[] = await fetchTasks();

console.log("-----tasks titles : ");
fetchedTasks.forEach((t) => console.log(t.title));

console.log("----------fetch missing task---------------");
try {
  const missingTask = await fetchTaskById(999);
  console.log(missingTask);
} catch (error) {
  console.log("Error:", (error as Error).message);
}

function serialize(task: Task): string {
  return JSON.stringify(task);
}

let tempTask:Task|undefined=fetchedTasks.at(0);
if(tempTask){
let stringFiedTask:string=serialize(tempTask);
console.log("stringify task : \n" + stringFiedTask);

let parsedTask:Task=JSON.parse(stringFiedTask);
console.log("parsed task : \n" + parsedTask.title);
}
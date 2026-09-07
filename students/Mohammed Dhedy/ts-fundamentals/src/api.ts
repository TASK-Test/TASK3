import type { Task } from "./domain";

let jsonString: string = `[
  {"id":1,
  "title":"study typescript",
  "description":"study generics and interfaces in typescript",
  "status":{"id":1,"name":"Done","position":3,"color":"rgb(0, 255, 17)"},
  "createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
  "priority":"HIGH",
  "targetDate":"2026-09-07T13:38:06.685Z",
  "createdAt":"2026-09-07T13:38:01.685Z",
  "updatedAt":"2026-09-07T13:38:01.685Z"},
  {"id":3,
  "title":"sleep",
  "description":"sleep and have some rest",
  "status":{"id":2,"name":"In Progress","position":2,"color":"rgb(0, 60, 255)"},
  "createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
  "priority":"HIGH",
  "targetDate":"2026-09-07T13:38:21.685Z",
  "createdAt":"2026-09-07T13:38:01.685Z",
  "updatedAt":"2026-09-07T13:38:01.685Z"},
  {"id":2,"title":"play games",
  "description":"play some games and have fun",
  "status":{"id":3,"name":"backlog","position":1,"color":"rgb(255, 0, 0)"},
  "createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
  "priority":"LOW",
  "targetDate":"2026-09-07T13:38:12.685Z",
  "createdAt":"2026-09-07T13:38:01.685Z",
  "updatedAt":"2026-09-07T13:38:01.685Z"}]`;

export async function fetchTasks(): Promise<Task[]> {
  await new Promise((res) => setTimeout(res, 200));

  return JSON.parse(jsonString);
}

export async function fetchTaskById(id: number): Promise<Task> {
  await new Promise((res) => setTimeout(res, 200));
  let tasks: Task[] = JSON.parse(jsonString);
  let result = tasks.find((t) => t.id === id);
  if (result === undefined) {
    throw new Error("task is not found");
  }
  return result;
}

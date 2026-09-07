export type Priority = "LOW" | "MEDIUM" | "HIGH";
export type Role = "USER" | "ADMIN";

export interface User {
  id: number;
  username: string;
  email: string;
  displayName?: string;
  role?: Role;
  createdAt: string;
}
export interface Status {
  id: number;
  name: string;
  position: number;
  color?: string;
}
export interface Task {
  id: number;
  title: string;
  description?: string;
  status: Status;
  createdBy: User;
  priority: Priority;
  targetDate: string;
  createdAt: string;
  updatedAt: string;
}

type TaskSummary = Pick<Task, "id" | "title" | "priority">;
export function toSummary(t: Task): TaskSummary {
  return {
    id: t.id,
    title: t.title,
    priority: t.priority,
  };
}

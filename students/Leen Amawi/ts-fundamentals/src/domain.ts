export type Priority = "LOW" | "MEDIUM" | "HIGH";
export type Role = "USER" | "ADMIN";
export interface User {
  id: number;
  username: string;
  email: string;
  displayName?: string;
  passwordHash: string;
  role: Role;
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
  status: Status;
  createdBy: User;
  priority: Priority;
  targetDate: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
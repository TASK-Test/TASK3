export type Priority = "LOW" | "MEDIUM" | "HIGH";

export interface Status {
  id: number;
  name: string;
  position: number;
  color: string|null;
}
export interface Task {
  id: number;
  title: string;
  description: string|null;
  status: Status;
  priority: Priority;
  targetDate: string|null;
  createdById: number;
  createdAt: string;
  updatedAt: string|null;
}

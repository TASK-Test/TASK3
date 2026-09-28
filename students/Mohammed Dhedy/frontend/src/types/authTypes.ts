export type Role = "ADMIN" | "USER";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  displayName: string;
}
export interface LoginResponse {
  token: string;
}
export interface RegisterResponse {
  id: number;
  username: string;
  email: string;
  displayName: string;
  role: Role;
}

export type TokenPayload = {
  sub: string|null;
  iat: number|null;
  exp: number|null;
};

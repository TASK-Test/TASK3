import { createContext} from "react";

type ContextValueType = {
  login: (responseToken: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  currentUser: string | null;
};
export const AuthContext = createContext<ContextValueType | undefined>(undefined);


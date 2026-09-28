import { useEffect, useState, type PropsWithChildren } from "react";
import { clearToken, getToken, saveToken } from "./AuthStorage";
import { AuthContext } from "./AuthContext";
import type { TokenPayload } from "../types/authTypes";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const decodeToken = (tokenString: string | null):TokenPayload => {
    if (!tokenString) return {sub:null,iat:null,exp:null};
    try {
      return jwtDecode<TokenPayload>(tokenString);
    } catch {
      return {sub:null,iat:null,exp:null};
    }
  };
  const [token, setToken] = useState<string | null>(getToken);
  const tokenPayload=decodeToken(token)
  const currentUser = tokenPayload.sub;

  const login = (responseToken: string) => {
    saveToken(responseToken);
    setToken(responseToken);
  };
  const logout = () => {
    clearToken();
    setToken(null);
  };
  useEffect(() => {
    if (!token || !tokenPayload.exp) return;

    const remainingTime = tokenPayload.exp * 1000 - Date.now();
    const timeoutId = window.setTimeout(() => {
     logout();
    }, Math.max(remainingTime, 0));

    return () => window.clearTimeout(timeoutId);
  }, [token, tokenPayload.exp]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated: token !== null,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

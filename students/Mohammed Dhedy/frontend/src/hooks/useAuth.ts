import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext is undefined");
  }

  return auth;
};

export default useAuth;

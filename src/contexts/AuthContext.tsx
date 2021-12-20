import { createContext, ReactNode, useState } from "react";
import { api } from "../services/axios";

type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | undefined;
  signIn: (user: User) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  const signIn = async (data: User) => {
    const result = await api.post("/auth/sign-in", data);

    if (result) {
      const {
        headers,
        data: { name },
      } = result;
      const { email, password } = data;
      setUser({ email, password });
      sessionStorage.setItem("userName", name);
      sessionStorage.setItem("authorization", headers["authorization"]);
      sessionStorage.setItem("refreshToken", headers["refresh-token"]);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

import React from "react";
import { SessionProvider } from "next-auth";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

import { useState, useContext, createContext, children } from "react";

const AuthContext = createContext();

const AuthProvaider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvaider;
export { AuthContext };

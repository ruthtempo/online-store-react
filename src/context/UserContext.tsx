import React, { createContext, useEffect, useState } from "react";
import { NewUser as User } from "../pages/Register";

export const UserContext = createContext<{
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
} | null>(null);

export const UserContextProvider = (p: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(null);

  function checkIfLoggedUser() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userObject: User = JSON.parse(currentUser);
      setUser(userObject);
    }
  }

  useEffect(() => {
    checkIfLoggedUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {p.children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { useUser };

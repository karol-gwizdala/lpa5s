import { createContext, useState } from "react";

export const SelectedUserContext = createContext();

export const SelectedUserContextProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");

  return (
    <SelectedUserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

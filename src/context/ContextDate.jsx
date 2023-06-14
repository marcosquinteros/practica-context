import { createContext, useState } from "react";

export const ContextApi = createContext();

const User = {
  id: undefined,
  name: undefined,
  email: undefined,
  password: undefined,
};

const ContextDate = ({ children }) => {
  const [user, setUser] = useState(User);

  return (
    <ContextApi.Provider value={{ user, setUser }}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextDate;

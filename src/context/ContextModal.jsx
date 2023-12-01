'use client';

import { createContext, useState } from 'react';

const UserContext = createContext();

export const ContextModal = ({ children }) => {
  const [user, setUser] = useState('teste');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

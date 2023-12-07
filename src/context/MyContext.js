'use client';

import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(true);
  const [pageSelectedFalteiro, setPageSelectedFalteiro] =
    useState('Relatorio de items');

  const updateState = (newValue) => {
    setMyState(newValue);
  };

  return (
    <MyContext.Provider
      value={{
        myState,
        updateState,

        pageSelectedFalteiro,
        setPageSelectedFalteiro,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

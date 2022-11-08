import React from "react";
import { useState } from "react";
import { createContext } from "react";

const CustomizeContext = createContext();

export function CustomizeProvider({ children }) {
  const [models, setModel] = useState([]);
  const addModel = (name) => {
    setModel((prevState) => [...prevState, name]);
  };
  return (
    <CustomizeContext.Provider value={{ models, addModel }}>
      {children}
    </CustomizeContext.Provider>
  );
}

export default CustomizeContext;

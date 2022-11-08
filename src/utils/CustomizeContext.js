import React from "react";
import { useState } from "react";
import { createContext } from "react";

const CustomizeContext = createContext();

export function CustomizeProvider({ children }) {
  const [models, setModel] = useState([]);
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [isDragMode, setDragMode] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isRotateMode, setIsRotateMode] = useState(false);
  const addModel = (name) => {
    setModel((prevState) => [
      ...prevState,
      { name, id: Math.floor(Math.random() * 1000000) },
    ]);
  };
  const removeModel = (id) => {
    setModel(models.filter((model) => model.id !== id));
  };
  return (
    <CustomizeContext.Provider
      value={{
        models,
        addModel,
        removeModel,
        isDeleteMode,
        isDragMode,
        setDragMode,
        setDeleteMode,
        setIsDragging,
        isDragging,
        isRotateMode,
        setIsRotateMode,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
}

export default CustomizeContext;

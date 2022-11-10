import React from "react";
import { useState } from "react";
import { createContext } from "react";

const CustomizeContext = createContext();

export function CustomizeProvider({ children }) {
  const [models, setModel] = useState([]);
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [isDragMode, setDragMode] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isRotateMode, setRotateMode] = useState(false);

  const addModel = (name) => {
    setModel((prevState) => [
      ...prevState,
      {
        name,
        id: Math.floor(Math.random() * 1000000),
        rotation: [0, 0, 0],
        pos: [0, 0, 0],
      },
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
        setRotateMode,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
}

export default CustomizeContext;

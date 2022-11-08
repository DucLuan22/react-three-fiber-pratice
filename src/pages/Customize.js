import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TestComponent from "../components/three/TestComponent";
import MenuComponent from "../components/MenuComponent/MenuComponent";
import { useContext } from "react";
import CustomizeContext from "../utils/CustomizeContext";

const Customize = () => {
  const { setDragMode, setDeleteMode, isDragMode, isDeleteMode } =
    useContext(CustomizeContext);

  const [isFurniture, setIsFurniture] = useState(true);
  const [isModifier, setIsModifier] = useState(false);

  const openFurnitures = () => {
    setIsFurniture(true);
    setIsModifier(false);
  };

  const openModifiers = () => {
    setIsFurniture(false);
    setIsModifier(true);
  };

  const selectDelete = () => {
    setDeleteMode(true);
    setDragMode(false);
  };
  const selectDrag = () => {
    setDeleteMode(false);
    setDragMode(true);
  };
  return (
    <div>
      <div className="bg-gray-700 opacity-90 absolute z-50 md:w-[380px] lg:w-[500px] h-full">
        <h1 className="text-white text-3xl font-semibold text-center my-3">
          Customization Menu
        </h1>
        <hr />
        <section className="flex justify-evenly text-2xl font-semibold">
          <button
            className="py-2 hover:bg-slate-200 hover:opacity-70 w-full"
            onClick={openFurnitures}
          >
            Furnitures
          </button>
          <div className="border-r-[1px] border-white" />
          <button
            className="py-2 w-full hover:bg-slate-200 cursor-pointer hover:opacity-70"
            onClick={openModifiers}
          >
            Modifiers
          </button>
        </section>
        <hr />
        {/* Furniture list */}
        {isFurniture && (
          <section className="flex gap-2 flex-wrap justify-center">
            <MenuComponent model={"sofa"} />
          </section>
        )}
        {/* Modifiers  */}
        {isModifier && (
          <section className="flex flex-col gap-2 flex-wrap justify-center">
            <button
              className={`hover:bg-slate-500 opacity-90 py-2 ${
                isDragMode && "bg-slate-100 hover:bg-slate-100"
              }`}
              onClick={selectDrag}
            >
              Drag Mode
            </button>
            <button
              className={`hover:bg-slate-500 opacity-90 py-2 ${
                isDeleteMode && "bg-slate-100 hover:bg-slate-100"
              }`}
              onClick={selectDelete}
            >
              Delete Mode
            </button>
          </section>
        )}
      </div>
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>
          <TestComponent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Customize;

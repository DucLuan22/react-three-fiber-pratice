import React from "react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TestComponent from "../components/three/TestComponent";
import MenuComponent from "../components/MenuComponent/MenuComponent";
import { useContext } from "react";
import CustomizeContext from "../utils/CustomizeContext";

const Customize = () => {
  const {items} = useContext(CustomizeContext)
  return (
    <div>
      <div className="bg-gray-700 opacity-90 absolute z-50 md:w-[380px] lg:w-[500px] h-full">
        <h1 className="text-white text-3xl font-semibold text-center my-3">
          Customization Menu
        </h1>
        <hr className="mx-5" />
        <section className="flex gap-2 flex-wrap justify-center">
          <MenuComponent model={"sofa"} />
        </section>
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

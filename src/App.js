import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import TestComponent from "./components/three/TestComponent";
function App() {
  return (
    <div>
      <div className="bg-gray-700 opacity-90 absolute z-50 md:w-[380px] lg:w-[500px] h-full">
        <h1 className="text-white text-3xl font-semibold text-center my-3">
          Customization Menu
        </h1>
        <hr className="mx-5" />
        <section className="flex gap-2 flex-wrap justify-center">
          <MenuComponent />
          <MenuComponent />
        </section>
      </div>
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>
          <TestComponent />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

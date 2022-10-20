import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TestComponent from "./components/three/TestComponent";
function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <TestComponent />
      </Suspense>
    </Canvas>
  );
}

export default App;

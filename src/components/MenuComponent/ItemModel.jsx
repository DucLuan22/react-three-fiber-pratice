import { useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import Sofa from "../sofa";

function ItemModel() {
  const ref = useRef();
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  return (
    <Suspense fallback={null}>
      <mesh ref={ref}>
        <Sofa scale={2} onClick={() => console.log()} />
      </mesh>

      <ambientLight args={["#FFFFFF", 0.25]} />
      <spotLight
        args={["#FFFFFF", 1.5, 20, angleToRadians(60), 0.4]}
        position={[-1, 11, 0]}
        castShadow={true}
      />
    </Suspense>
  );
}

export default ItemModel;

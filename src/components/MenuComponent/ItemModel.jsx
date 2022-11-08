import { useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { useContext } from "react";
import { angleToRadians } from "../../utils/angle";
import CustomizeContext from "../../utils/CustomizeContext";
import Sofa from "../sofa";

function ItemModel({ model }) {
  const ref = useRef();
  const { addModel } = useContext(CustomizeContext);
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const Model = require(`../${model}`).default;
  return (
    <Suspense fallback={null}>
      <mesh ref={ref} onClick={(e) => addModel(model)}>
        <Model scale={2} />
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

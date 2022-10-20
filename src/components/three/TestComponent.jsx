import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";
const TestComponent = () => {
  const OrbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!OrbitControlsRef.current) {
      const { x, y } = state.mouse;

      // OrbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(360));
      OrbitControlsRef.current.update();
    }
  });
  useEffect(() => {
    if (!OrbitControlsRef.current) {
      console.log(OrbitControlsRef.current);
    }
  }, [OrbitControlsRef.current]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 9]} />
      <OrbitControls
        ref={OrbitControlsRef}
        maxPolarAngle={angleToRadians(80)}
        minPolarAngle={angleToRadians(30)}
      />

      {/* Ball */}
      <mesh position={[4, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0392F4" />
      </mesh>
      <ambientLight args={["#FFFFFF", 0.25]} />
      {/* <directionalLight args={["#FFFFFF", 1]} position={[-3, 1, 0]} /> */}
      <spotLight
        args={["#FFFFFF", 1.5, 20, angleToRadians(60), 0.4]}
        position={[-1, 11, 0]}
        castShadow={true}
      />
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="#2288cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default TestComponent;

import { OrbitControls, OrthographicCamera, Plane } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import * as THREE from "three";
import { angleToRadians } from "../../utils/angle";
import CustomizeContext from "../../utils/CustomizeContext";
import Obj from "../Obj";
const TestComponent = () => {
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const { models, isDragging } = useContext(CustomizeContext);
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={300}
        shadow-mapSize-width={300}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      ></mesh>

      <mesh position={[10, 3.5, 0]} rotation={[0, -angleToRadians(90), 0]}>
        <Plane args={[20, 7, 3]} />
      </mesh>

      <mesh position={[-10, 3.5, 0]} rotation={[0, angleToRadians(90), 0]}>
        <Plane args={[20, 7, 3]} />
      </mesh>

      <mesh position={[0, 3.5, 10]} rotation={[0, angleToRadians(180), 0]}>
        <Plane args={[20, 7, 3]} />
      </mesh>

      <mesh position={[0, 3.5, -10]} rotation={[0, angleToRadians(0), 0]}>
        <Plane args={[20, 7, 3]} />
      </mesh>
      <planeHelper args={[floorPlane, 1, "red"]} />

      <gridHelper args={[20, 20]} />

      {models.map((model) => (
        <Obj
          floorPlane={floorPlane}
          model={model.name}
          id={model.id}
          key={model.id}
        />
      ))}

      <OrthographicCamera makeDefault zoom={50} position={[0, 40, 100]} />

      <OrbitControls
        minZoom={10}
        maxZoom={50}
        enabled={!isDragging}
        maxPolarAngle={angleToRadians(80)}
        minPolarAngle={angleToRadians(30)}
      />
    </>
  );
};

export default TestComponent;

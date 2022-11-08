import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import * as THREE from "three";
import { angleToRadians } from "../../utils/angle";
import CustomizeContext from "../../utils/CustomizeContext";
import Obj from "../Obj";
const TestComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState("");
  const [itemList, setObjList] = useState([""]);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const { models } = useContext(CustomizeContext);
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

      <planeHelper args={[floorPlane, 1, "red"]} />

      <gridHelper args={[20, 20]} />
      {models.map((name) => (
        <Obj
          setIsDragging={setIsDragging}
          floorPlane={floorPlane}
          isEditing={isEditing}
          model={name}
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

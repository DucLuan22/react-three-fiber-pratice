import React, { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";

import * as THREE from "three";
import { useContext } from "react";
import CustomizeContext from "../utils/CustomizeContext";
import { useThree } from "@react-three/fiber";

function Obj({ floorPlane, model, id }) {
  const Object = require(`../model/${model}`).default;
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [pos, setPos] = useState([0, 0, 0]);
  const { removeModel, isDeleteMode, isDragMode, setDragMode, setIsDragging } =
    useContext(CustomizeContext);

  let planeIntersectPoint = new THREE.Vector3();

  const dragObjectRef = useRef();

  const [spring, api] = useSpring(() => ({
    // position: [0, 0, 0],
    position: pos,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  const bind = useDrag(
    ({ active, timeStamp, event, movement: [x, y] }) => {
      if (active && isDragMode) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);
        setPos([planeIntersectPoint.x, 0, planeIntersectPoint.z]);
        api.start({
          // position: active ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
          position: pos,
          scale: 1,
          // rotation: [0, x / aspect, 0],
        });
      }

      if (isDeleteMode) {
        removeModel(id);
        console.log(id);
      }
      setIsDragging(active);

      return timeStamp;
    },
    { delay: true }
  );

  return (
    <animated.mesh {...spring} {...bind()} castShadow>
      <Object ref={dragObjectRef} />
    </animated.mesh>
  );
}

export default Obj;

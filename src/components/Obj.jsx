import React, { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import Sofa from "./sofa";

function Obj({ setIsDragging, floorPlane, model }) {
  const Object = require(`./${model}`).default;
  const [pos, setPos] = useState([0, 0, 0]);

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
    ({ active, timeStamp, event }) => {
      if (active) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);
        setPos([planeIntersectPoint.x, 0, planeIntersectPoint.z]);
      }
      setIsDragging(active);

      api.start({
        // position: active ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
        position: pos,
        scale: 1,
      });
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

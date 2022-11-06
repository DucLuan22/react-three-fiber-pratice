import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { angleToRadians } from "../../utils/angle";

function ProductCard({ model }) {
  let Model = require(`../${model}`).default;
  return (
    <main className="flex flex-col items-center w-[300px] border-black border-[1px] rounded-lg">
      <span className="flex pt-6 hover:transform hover:scale-150">
        <Canvas className="item-container block ">
          <Suspense fallback={null}>
            <mesh>
              <Model scale={2} />
            </mesh>

            <ambientLight args={["#FFFFFF", 0.25]} />
            <spotLight
              args={["#FFFFFF", 1.5, 20, angleToRadians(60), 0.4]}
              position={[-1, 11, 0]}
              castShadow={true}
            />
          </Suspense>
        </Canvas>
      </span>
      <hr className="border-black border-b-[1px]" />
      <div className="font-semibold text-center p-2">
        <p className="my-1 text-2xl">Leather Chair</p>
        <p className="text-gray-500 text-lg">$12345</p>
        <button className="border-black rounded-md border-[1px] p-1 w-52 hover:bg-slate-600 transition duration-300">
          Buy
        </button>
      </div>
    </main>
  );
}

export default ProductCard;

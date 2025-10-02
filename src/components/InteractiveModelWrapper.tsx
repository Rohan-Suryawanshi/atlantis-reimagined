// components/InteractiveModel.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";

interface InteractiveModelProps {
   modelPath: string; // path to GLB
   scale?: number;
   position?: [number, number, number];
}

function Model({
   modelPath,
   scale = 2.5,
   position = [0, 0, 0],
}: InteractiveModelProps) {
   const { scene } = useGLTF(modelPath);
   const modelRef = useRef<any>();

   useFrame(() => {
      if (modelRef.current) modelRef.current.rotation.y += 0.001;
   });

   return (
      <primitive
         object={scene}
         ref={modelRef}
         scale={scale}
         position={position}
      />
   );
}

export default function InteractiveModelWrapper({
   modelPath,
}: {
   modelPath: string;
}) {
   return (
      <div className="w-full h-full relative overflow-hidden rounded-2xl">
         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>

            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} />

            <Suspense fallback={null}>
               <Model modelPath={modelPath} />
            </Suspense>

            <OrbitControls
               enableZoom={false}
               enablePan={false}
               enableDamping
               dampingFactor={0.05}
            />
         </Canvas>
      </div>
   );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Box() {
  const boxRef = useRef();

  useFrame(({ mouse }) => {
    boxRef.current.rotation.y = mouse.x * Math.PI; // Mouse ke X position ke basis pe rotate
    boxRef.current.rotation.x = mouse.y * Math.PI; // Mouse ke Y position ke basis pe rotate
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function ThreeDBox() {
  return (
    <Canvas style={{ width: "100%", height: "400px" }}> {/* Adjust height/width */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

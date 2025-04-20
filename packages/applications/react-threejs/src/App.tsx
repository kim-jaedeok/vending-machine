import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";

const SCALE = 0.2;

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);
  useFrame((_state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[SCALE, SCALE, SCALE]} />
      <meshStandardMaterial color="#2f74c0" />
    </mesh>
  );
}

const transformPosition = (x: number, y: number, z: number) => {
  return new Vector3((x - 10) * SCALE, y * SCALE, z * SCALE);
};

function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      {/* H */}
      <Box position={transformPosition(-12, 1, 0)} />
      <Box position={transformPosition(-10, 1, 0)} />

      <Box position={transformPosition(-12, 0, 0)} />
      <Box position={transformPosition(-10, 0, 0)} />

      <Box position={transformPosition(-12, -1, 0)} />
      <Box position={transformPosition(-11, -1, 0)} />
      <Box position={transformPosition(-10, -1, 0)} />

      <Box position={transformPosition(-12, -2, 0)} />
      <Box position={transformPosition(-10, -2, 0)} />

      <Box position={transformPosition(-12, -3, 0)} />
      <Box position={transformPosition(-10, -3, 0)} />

      {/* E */}
      <Box position={transformPosition(-8, 1, 0)} />
      <Box position={transformPosition(-7, 1, 0)} />
      <Box position={transformPosition(-6, 1, 0)} />

      <Box position={transformPosition(-8, 0, 0)} />

      <Box position={transformPosition(-8, -1, 0)} />
      <Box position={transformPosition(-7, -1, 0)} />
      <Box position={transformPosition(-6, -1, 0)} />

      <Box position={transformPosition(-8, -2, 0)} />

      <Box position={transformPosition(-8, -3, 0)} />
      <Box position={transformPosition(-7, -3, 0)} />
      <Box position={transformPosition(-6, -3, 0)} />

      {/* L */}
      <Box position={transformPosition(-4, 1, 0)} />

      <Box position={transformPosition(-4, 0, 0)} />

      <Box position={transformPosition(-4, -1, 0)} />

      <Box position={transformPosition(-4, -2, 0)} />

      <Box position={transformPosition(-4, -3, 0)} />
      <Box position={transformPosition(-3, -3, 0)} />
      <Box position={transformPosition(-2, -3, 0)} />

      {/* L */}
      <Box position={transformPosition(0, 1, 0)} />

      <Box position={transformPosition(0, 0, 0)} />

      <Box position={transformPosition(0, -1, 0)} />

      <Box position={transformPosition(0, -2, 0)} />

      <Box position={transformPosition(0, -3, 0)} />
      <Box position={transformPosition(1, -3, 0)} />
      <Box position={transformPosition(2, -3, 0)} />

      {/* O */}
      <Box position={transformPosition(4, 1, 0)} />
      <Box position={transformPosition(5, 1, 0)} />
      <Box position={transformPosition(6, 1, 0)} />

      <Box position={transformPosition(4, 0, 0)} />
      <Box position={transformPosition(6, 0, 0)} />

      <Box position={transformPosition(4, -1, 0)} />
      <Box position={transformPosition(6, -1, 0)} />

      <Box position={transformPosition(4, -2, 0)} />
      <Box position={transformPosition(6, -2, 0)} />

      <Box position={transformPosition(4, -3, 0)} />
      <Box position={transformPosition(5, -3, 0)} />
      <Box position={transformPosition(6, -3, 0)} />

      {/* W */}
      <Box position={transformPosition(9, 1, 0)} />
      <Box position={transformPosition(13, 1, 0)} />

      <Box position={transformPosition(9, 0, 0)} />
      <Box position={transformPosition(13, 0, 0)} />

      <Box position={transformPosition(9, -1, 0)} />
      <Box position={transformPosition(11, -1, 0)} />
      <Box position={transformPosition(13, -1, 0)} />

      <Box position={transformPosition(9, -2, 0)} />
      <Box position={transformPosition(11, -2, 0)} />
      <Box position={transformPosition(13, -2, 0)} />

      <Box position={transformPosition(10, -3, 0)} />
      <Box position={transformPosition(12, -3, 0)} />

      {/* O */}
      <Box position={transformPosition(15, 1, 0)} />
      <Box position={transformPosition(16, 1, 0)} />
      <Box position={transformPosition(17, 1, 0)} />

      <Box position={transformPosition(15, 0, 0)} />
      <Box position={transformPosition(17, 0, 0)} />

      <Box position={transformPosition(15, -1, 0)} />
      <Box position={transformPosition(17, -1, 0)} />

      <Box position={transformPosition(15, -2, 0)} />
      <Box position={transformPosition(17, -2, 0)} />

      <Box position={transformPosition(15, -3, 0)} />
      <Box position={transformPosition(16, -3, 0)} />
      <Box position={transformPosition(17, -3, 0)} />

      {/* R */}
      <Box position={transformPosition(19, 1, 0)} />
      <Box position={transformPosition(20, 1, 0)} />
      <Box position={transformPosition(21, 1, 0)} />

      <Box position={transformPosition(19, 0, 0)} />
      <Box position={transformPosition(21, 0, 0)} />

      <Box position={transformPosition(19, -1, 0)} />
      <Box position={transformPosition(20, -1, 0)} />
      <Box position={transformPosition(21, -1, 0)} />

      <Box position={transformPosition(19, -2, 0)} />
      <Box position={transformPosition(20, -2, 0)} />

      <Box position={transformPosition(19, -3, 0)} />
      <Box position={transformPosition(21, -3, 0)} />

      {/* L */}
      <Box position={transformPosition(23, 1, 0)} />

      <Box position={transformPosition(23, 0, 0)} />

      <Box position={transformPosition(23, -1, 0)} />

      <Box position={transformPosition(23, -2, 0)} />

      <Box position={transformPosition(23, -3, 0)} />
      <Box position={transformPosition(24, -3, 0)} />
      <Box position={transformPosition(25, -3, 0)} />

      {/* D */}
      <Box position={transformPosition(27, 1, 0)} />
      <Box position={transformPosition(28, 1, 0)} />

      <Box position={transformPosition(27, 0, 0)} />
      <Box position={transformPosition(29, 0, 0)} />

      <Box position={transformPosition(27, -1, 0)} />
      <Box position={transformPosition(29, -1, 0)} />

      <Box position={transformPosition(27, -2, 0)} />
      <Box position={transformPosition(29, -2, 0)} />

      <Box position={transformPosition(27, -3, 0)} />
      <Box position={transformPosition(28, -3, 0)} />

      {/* ! */}
      <Box position={transformPosition(32, 1, 0)} />
      <Box position={transformPosition(32, 0, 0)} />
      <Box position={transformPosition(32, -1, 0)} />
      <Box position={transformPosition(32, -3, 0)} />
    </Canvas>
  );
}

export default App;

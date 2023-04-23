import React, { useRef } from 'react'
import { Canvas as FiberCanvas, ThreeElements, useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';


const Sphere = () => {
  const sphereREf = useRef<ThreeElements | null>(null);
  const earf = useLoader(TextureLoader, '/images/8k_earth_normal_map.png');
  /*
  useFrame(() => {
    if (!sphereREf?.current?.rotation) {
      return;
    }
    sphereREf.current.rotation.x += 0.001;
  });
  */

  return (
    <mesh ref={sphereREf} position={[0, -10, 0]} rotation={[0, 0, 0]} >
      <sphereBufferGeometry args={[25, 30, 30]} />
      <meshStandardMaterial map={earf} />
    </mesh>
  );
};

function Canvas() {
  return (
    <FiberCanvas
      style={{ position: 'absolute', bottom: '0', left: '0' }}
      camera={{ position: [0, 15, 25] }}
    >
      <pointLight position={[15, 25, 15]} />
      <Sphere />
    </FiberCanvas>
  )
}

export default Canvas

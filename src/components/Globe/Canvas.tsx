import React, { useEffect, useRef } from 'react'
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas as FiberCanvas, ThreeElements, useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Sphere = ({ percentage = 0 }) => {
  const sphereREf = useRef<ThreeElements | null>(null);
  const earf = useLoader(TextureLoader, '/images/earf-lights.jpg');

  useFrame(() => {
    if (!sphereREf.current) {
      return;
    }
    // TODO rotate on scroll
    sphereREf.current.rotation.y -= 0.0003;
  });

  /*
  useEffect(() => {

    if (!sphereREf.current) {
      return;
    }
    // 30 to 15 
    const rotation = 15 * percentage;
    sphereREf.current.rotation.y = (Math.PI / 180) * (30 - rotation);
    // sphereREf.current?.rotation?.y?.lerp?.((Math.PI / 180) * (30 - rotation));
  }, [percentage])
  */

  return (
    <mesh
      ref={sphereREf}
      position={[0, -15, 0]}
      // start in california
      rotation={[-(Math.PI / 180) * 15, (Math.PI / 180) * 30, 0]}
    >
      <sphereGeometry args={[15, 100, 100]} />
      <meshStandardMaterial map={earf} />
      <OrbitControls />
    </mesh>
  );
};

function Canvas({ percent }) {
  return (
    <FiberCanvas
      style={{ position: 'absolute', bottom: '0', left: '0' }}
      camera={{ position: [0, 0, 25] }}
    >
      <ambientLight />
      <Sphere percentage={percent} />
    </FiberCanvas>
  )
}

export default Canvas

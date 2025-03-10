import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

// Individual ball component
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={1.5} position={props.position} rotation={props.rotation}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  )
}

const BallCanvas = ({ technologies, icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

    // Calculate positions and rotations in a circle
    const calculatePositionAndRotation = (index, total) => {
      // Use the same radius regardless of device size
      const radius = 8;
      const angleStep = (2 * Math.PI) / total;
      const angle = index * angleStep;
      
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const rotY = Math.atan2(x, z);
      
      return {
        position: [x, 0, z],
        rotation: [0, rotY, 0]
      };
    };

  // Adjust camera distance based on device size
  const cameraPosition = [0, 0, isMobile ? 25 : 23];
  const cameraFov = isMobile ? 23 : 13;
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: cameraFov }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={0.8} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableRotate={true}
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2}
        />
        {technologies.map((tech, index) => {
          const { position, rotation } = calculatePositionAndRotation(index, technologies.length);
          return (
            <Ball 
              key={tech.name} 
              imgUrl={tech.icon} 
              position={position}
              rotation={rotation}
            />
          );
        })}
      </Suspense>
      <Preload all />
    </Canvas>
  );

}

export default BallCanvas
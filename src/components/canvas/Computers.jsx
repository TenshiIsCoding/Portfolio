import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Stars } from './Stars'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf')
  const modelRef = useRef()
  const [initialAnimation, setInitialAnimation] = useState(true)
  const [scale, setScale] = useState(0)
  const targetScale = isMobile ? 0.08 : 0.15
  
  useFrame(() => {
    if (initialAnimation) {
      setScale((prevScale) => {
        const newScale = prevScale + (targetScale - prevScale) * 0.05
        if (Math.abs(newScale - targetScale) < 0.1) {
          setInitialAnimation(false)
          return targetScale;
        }
        return newScale;
      });
      
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[40, 15, 50]}
        angle={0.22}
        intensity={1}
        shadow-mapSize={1024}
      />
      <primitive
        ref={modelRef}
        object={computer.scene}
        scale={initialAnimation ? scale : targetScale}
        position={[0, -5, 0.5]}
        rotation={[0, 7.1, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '85%' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 5 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <Stars
              radius={300}
              depth={50}
              factor={4}
              saturation={0}
              fade
              speed={0.3}
            />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
        <Canvas
          frameloop='always'
          shadows
          camera={{ position: [20, 3, 5], fov: 50 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  )
}

export default ComputersCanvas
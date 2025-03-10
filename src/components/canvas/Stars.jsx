import { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export const Stars = (props) => {
  const ref = useRef()
  const [sphere, setSphere] = useState(null)
  
  useEffect(() => {
    try {
      const numPoints = 1500;
      const positions = new Float32Array(numPoints * 3);
      
      for (let i = 0; i < numPoints * 3; i += 3) {
        const r = 1.2 * Math.cbrt(Math.random());
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((2 * Math.random()) - 1);
        
        positions[i] = r * Math.sin(phi) * Math.cos(theta);
        positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i+2] = r * Math.cos(phi);
      }
      
      setSphere(positions);
    } catch (error) {
      console.error("Error creating star field:", error);
      const fallback = new Float32Array(300 * 3);
      for (let i = 0; i < fallback.length; i++) {
        fallback[i] = (Math.random() - 0.5) * 2;
      }
      setSphere(fallback);
    }
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  })

  return sphere ? (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffb703"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  ) : null
}

const StarsCanvas = () => {
  return(
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{position: [0, 0, 5], fov: 4}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
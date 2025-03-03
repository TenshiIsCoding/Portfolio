import { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export const Stars = (props) => {
  const ref = useRef()
  const [sphere, setSphere] = useState(null)
  
  // Create the sphere data in useEffect to avoid NaN values
  useEffect(() => {
    const positions = new Float32Array(5000);
    const randomValues = random.inSphere(positions, { radius: 1.2 });
    
    // Ensure there are no NaN values in the array
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    
    setSphere(positions);
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
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
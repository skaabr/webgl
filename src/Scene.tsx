// Scene.tsx
import { Suspense, lazy } from 'react'
import { Html, Center, Bounds } from '@react-three/drei'

const LogoModel = lazy(() => import('./LogoModel'))

export default function Scene() {
  return (
    <group>
      <Suspense fallback={
        <Html center>
          <div style={{padding:'8px 12px',background:'rgba(0,0,0,.6)',borderRadius:12,fontSize:14}}>
            Carregando modelo...
          </div>
        </Html>
      }>
        <Bounds fit observe clip margin={1.2}>
          <Center top>
            <LogoModel />
          </Center>
        </Bounds>
      </Suspense>

      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.6,0]} receiveShadow>
        <circleGeometry args={[8,64]} />
        <meshStandardMaterial color="#111" roughness={1} metalness={0} />
      </mesh>
    </group>
  )
}

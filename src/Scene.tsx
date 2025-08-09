import { Suspense } from 'react'
import { Html } from '@react-three/drei'
import LogoModel from './LogoModel'

export default function Scene() {
  return (
    <group>
      {/* Loader simples enquanto o GLB carrega */}
      <Suspense fallback={
        <Html center>
          <div style={{
            padding: '8px 12px',
            background: 'rgba(0,0,0,.6)',
            borderRadius: 12,
            fontSize: 14
          }}>
            Carregando modelo...
          </div>
        </Html>
      }>
        <LogoModel />
      </Suspense>

      {/* chão */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial color="#111" roughness={1} metalness={0} />
      </mesh>
    </group>
  )
}
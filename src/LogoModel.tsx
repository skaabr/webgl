import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Tip: declare o caminho relativo do seu arquivo .glb
const MODEL_URL = '/models/logo.glb'

export default function LogoModel() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(MODEL_URL)

  // Ajustes iniciais de escala/posição (varia conforme o modelo)
  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = true
      obj.receiveShadow = true
      // Material físico básico (se o modelo vier sem material ou muito escuro)
      // if (!obj.material) obj.material = new THREE.MeshStandardMaterial({ color: '#d65728' })
    }
  })

  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.y += dt * 0.3
  })

  return (
  <group
    ref={group}
    position={[0, 0, 0]}
    rotation={[0, Math.PI * -0.5, 0]}  // gira 180° pra encarar a câmera
    scale={0.4}                 // deixa menor
  >
    <primitive object={scene} />
  </group>
)

}

// Pré-carrega o modelo (opcional)
useGLTF.preload(MODEL_URL)

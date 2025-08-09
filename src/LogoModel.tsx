import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MeshoptDecoder } from 'three-stdlib'

const MODEL_URL = '/models/logo.comp.glb' // use o comprimido

export default function LogoModel() {
  const group = useRef<THREE.Group>(null)

  const { scene } = useGLTF(MODEL_URL, true, true, (loader) => {
    (loader as any).setMeshoptDecoder(MeshoptDecoder)
  })

  scene.traverse((obj: any) => {
    if (obj.isMesh) { obj.castShadow = obj.receiveShadow = true }
  })

  useFrame((_, dt) => { if (group.current) group.current.rotation.y += dt * 0.3 })

  return (
    <group ref={group} rotation={[0, Math.PI, 0]} scale={0.9}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(MODEL_URL)

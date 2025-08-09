import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Scene from './Scene'
import { useQuery } from './useQuery'

export default function App() {
  const q = useQuery()
  const isEmbed = q.embed === '1'

  return (
    <div className="app" style={isEmbed ? { gridTemplateRows: '1fr' } : undefined}>
      {!isEmbed && (
        <header className="header">
          <h1>B.O. Labs • WebGL Starter</h1>
          <a href="https://bolabs.co" target="_blank" rel="noreferrer">bolabs.co</a>
        </header>
      )}

      <div className="canvas-wrap">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 1.2, 3.2], fov: 45 }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
          <Scene />
          <ContactShadows position={[0, -0.6, 0]} opacity={0.4} blur={2.5} scale={10} />
          <Environment preset="city" />
          <OrbitControls
            enableDamping
            // no modo embed deixo a câmera mais “travada”
            minDistance={1.8}
            maxDistance={4.5}
            enablePan={!isEmbed ? true : false}
          />
        </Canvas>

        {!isEmbed && (
          <div className="overlay">
            <div>Arraste com o mouse • role para zoom</div>
            <a className="cta" href="#" onClick={(e) => e.preventDefault()}>
              Chamar no Whats
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

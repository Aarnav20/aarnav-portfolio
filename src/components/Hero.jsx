// src/components/Hero.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'

function MacbookModel() {
  const { scene } = useGLTF('/assets/macbook.glb')
  return <primitive object={scene} scale={1.5} />
}

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-8">
        <motion.img
          src="/assets/me.jpg"
          alt="Aarnav Dadhich"
          className="w-32 h-32 rounded-full border-4 border-blue-400 mb-4 shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-4xl font-bold text-white mb-2">Aarnav Dadhich</h1>
        <p className="text-blue-200 mb-4">Software Developer | AI & Web Enthusiast</p>
        <a href="#contact" className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition">Contact Me</a>
      </div>
      <div className="w-full md:w-1/2 h-96">
        <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <MacbookModel />
        </Canvas>
      </div>
    </section>
  )
}

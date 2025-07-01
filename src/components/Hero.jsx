import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 px-6 py-16 gap-10" id="hero">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.img
          src="/assets/me.jpg"
          alt="Aarnav Dadhich"
          className="w-40 h-40 rounded-full border-4 border-blue-400 mb-6 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aarnav Dadhich
        </motion.h1>
        <p className="text-blue-200 mb-8 text-xl">Software Developer | AI & Web Enthusiast</p>
        <a href="#contact" className="bg-blue-500 text-white px-8 py-3 rounded shadow hover:bg-blue-600 transition text-lg font-semibold">Contact Me</a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center h-96">
        {/* Place your 3D Canvas here if desired */}
        <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center">
          <span className="text-blue-200 text-lg">[3D Model Placeholder]</span>
        </div>
      </div>
    </section>
  )
}

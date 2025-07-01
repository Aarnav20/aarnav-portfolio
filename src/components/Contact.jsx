import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">Contact</h2>
        <motion.div
          className="bg-blue-50 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-blue-700 mb-1 font-semibold">Name</label>
              <input type="text" className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-blue-700 mb-1 font-semibold">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block text-blue-700 mb-1 font-semibold">Message</label>
              <textarea className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="Your Message" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-blue-700">
            <p>Email: <a href="mailto:aarnavdadhich14@gmail.com" className="underline">aarnavdadhich14@gmail.com</a></p>
            <p>Phone: <a href="tel:+917840877198" className="underline">+91-7840877198</a></p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
              <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

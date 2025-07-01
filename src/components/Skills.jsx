import { motion } from 'framer-motion'

const skills = [
  { label: "Python", icon: "🐍" },
  { label: "JavaScript", icon: "🟨" },
  { label: "React.js", icon: "⚛️" },
  { label: "Node.js", icon: "🟩" },
  { label: "HTML", icon: "📄" },
  { label: "CSS", icon: "🎨" },
  { label: "TensorFlow", icon: "🔶" },
  { label: "PyTorch", icon: "🔥" },
  { label: "SQL", icon: "🗄️" },
  { label: "MongoDB", icon: "🍃" },
  { label: "Machine Learning", icon: "🤖" },
  { label: "NLP", icon: "🗣️" }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl flex flex-col items-center p-6 shadow hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <span className="font-semibold text-blue-700">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

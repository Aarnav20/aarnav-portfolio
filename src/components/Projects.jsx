import { motion } from 'framer-motion'

const projects = [
  {
    title: "Real-Time Traffic Analysis Using Deep Learning",
    description: "YOLOv5 & CNN-based system for congestion detection and prediction. Enhanced accuracy, speed, and scalability."
  },
  {
    title: "Quiz Game Using React Native",
    description: "Cross-platform quiz app for children with score tracking and responsive UI."
  },
  {
    title: "Suicidal Text Detection Using AI & NLP",
    description: "Sentiment and intent detection model using BERT, RoBERTa, and LSTMs. React.js chat interface for real-time alerts."
  },
  {
    title: "NutriScan: Personalized Nutrition for Pregnancy",
    description: "Q-Learning-based recommendation engine for trimester-specific diet plans. Interactive React.js frontend."
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

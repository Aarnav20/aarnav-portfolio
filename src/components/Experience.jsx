// src/components/Experience.jsx
import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Software Testing Intern",
    company: "Reliance SmartMoney (RSec)",
    period: "Sept 2023 - Oct 2023",
    details: [
      "Engineered and executed comprehensive QA testing for ‘HeyTorus,’ a next-gen stock trading platform, ensuring 100% functional integrity across Android and iOS.",
      "Diagnosed and resolved high-priority bugs, resulting in a 40% increase in app speed and significant reduction in crash reports."
    ]
  },
  {
    role: "Project Intern",
    company: "Nucleus Software Exports",
    period: "Nov 2023 - Dec 2023",
    details: [
      "Developed an advanced internal web app using React.js, HTML, CSS, JavaScript, Node.js, and RESTful APIs, improving workflow productivity by 50%.",
      "Applied Agile methodologies and Scrum practices to streamline processes, enhance collaboration, and reduce delivery time by 15%.",
      "Participated in code reviews, documentation, and daily stand-ups for effective cross-functional collaboration."
    ]
  }
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-blue-500">{exp.company}</span>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

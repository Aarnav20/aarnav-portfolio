// src/components/Education.jsx
import { motion } from 'framer-motion'

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vellore Institute Of Technology, Chennai",
    period: "Aug 2021 - May 2025",
    details: ["GPA: 7.8"]
  },
  {
    degree: "High School (Science and Mathematics)",
    institution: "DLF Public School, Delhi NCR",
    period: "Mar 2019 - Mar 2021",
    details: ["XII: 80%", "X: 94%"]
  }
]

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Education</h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-blue-500">{edu.institution}</span>
                </div>
                <span className="text-gray-500">{edu.period}</span>
              </div>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {edu.details.map((item, i) => (
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

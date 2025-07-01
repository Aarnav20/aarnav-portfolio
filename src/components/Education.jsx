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
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <h3 className="text-xl font-semibold text-blue-800">{edu.degree}</h3>
              <span className="text-blue-500">{edu.institution}</span>
              <span className="block text-gray-500 mb-2">{edu.period}</span>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

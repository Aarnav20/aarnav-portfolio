// src/components/Skills.jsx
import { motion } from 'framer-motion'

const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "PHP", "SQL", "NoSQL"] },
  { category: "Web Technologies", items: ["HTML", "CSS", "React.js", "Node.js", "RESTful APIs"] },
  { category: "Frameworks & Libraries", items: ["TensorFlow", "PyTorch", "SciKit-Learn", "Express.js"] },
  { category: "Testing Tools", items: ["Selenium IDE", "Eclipse", "JUnit", "Postman"] },
  { category: "Methodologies", items: ["Agile", "Scrum", "SDLC", "STLC", "Unit Testing", "Regression Testing"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Others", items: ["Data Preprocessing", "Data Visualization", "Machine Learning", "NLP"] }
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-blue-600 mb-2">{skill.category}</h4>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

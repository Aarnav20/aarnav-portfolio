import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App

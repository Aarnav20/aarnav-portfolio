import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  )
}

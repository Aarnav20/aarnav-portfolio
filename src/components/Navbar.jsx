export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-700">Aarnav</span>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600 transition">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-600 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

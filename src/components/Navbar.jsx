import { useTheme } from "../context/ThemeContext"
import img from "../assets/IMG_1208-modified.png"


export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-[100]
        backdrop-blur-md transition-colors duration-300
        bg-white/80 border-b border-slate-200
        dark:bg-slate-950/90 dark:border-slate-800
        text-slate-900 dark:text-slate-100
      "
    >
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">


      <div className="flex items-center gap-3">
          <img
            src={img}
            alt="Prajakta"
            className="h-8 w-8 rounded-full object-cover hover:scale-105 transition-transform"
          />
          <span className="font-semibold text-base">
            Prajakta
          </span>
        </div>


        <div className="flex items-center gap-6 text-sm">
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>

          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>

        </div>
      </div>
    </nav>
  )
}

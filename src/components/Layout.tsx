import { Outlet } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-t-bg/80 backdrop-blur-md border-b-[0.5px] border-t-border px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-mono text-t-gold text-sm font-medium">
          igor.dev()
        </a>
        <div className="flex gap-6 font-mono text-[11px] uppercase text-t-muted">
          <a href="#work" className="hover:text-t-gold transition-colors duration-200">
            work
          </a>
          <a href="#about" className="hover:text-t-gold transition-colors duration-200">
            about
          </a>
          <a href="#contact" className="hover:text-t-gold transition-colors duration-200">
            contact
          </a>
        </div>
      </nav>

      <main className="flex-1 pt-24 pb-20">
        <Outlet />
      </main>

      <footer className="border-t-[0.5px] border-t-border bg-t-bg px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-t-gold text-sm font-medium">igor.dev()</div>
        <div className="font-mono text-[11px] text-t-muted">© 2025 Igor Mota</div>
        <div className="flex gap-4 font-mono text-[11px] text-t-muted">
          <a
            href="https://github.com/motaigr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-t-gold transition-colors duration-200 flex items-center gap-1"
          >
            <Github className="w-3 h-3" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/igor-augusto-mota-gon%C3%A7alves-b85571234/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-t-gold transition-colors duration-200 flex items-center gap-1"
          >
            <Linkedin className="w-3 h-3" /> LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

import Link from "next/link"
import { Globe, Github } from "lucide-react"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center retro-container">
      <Link className="flex items-center justify-center" href="#">
        <Globe className="h-6 w-6 mr-2 text-primary" />
        <span className="font-bold text-xl retro-text">IPDM</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#Paper">
          Learn More
        </Link>
        <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:text-secondary transition-colors" href="https://github.com/ipdm-wg" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
        </Link>
        <Link className="text-sm font-medium hover:text-secondary transition-colors" href="https://cypheros.xyz/" target="_blank" rel="noopener noreferrer">
          Cypher
        </Link>
      </nav>
    </header>
  )
}
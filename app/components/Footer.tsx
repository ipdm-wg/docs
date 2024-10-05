import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-primary retro-container">
      <p className="text-xs text-muted-foreground">© 2150 IPDM. All rights reserved across the known universe.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:text-secondary transition-colors" href="mailto:vivek@ipdm.tech">
            Contact
        </Link>
        <Link className="text-xs hover:text-secondary transition-colors" href="https://airtable.com/apptKwInL7H6t9u7E/paggbPkZyzXOn3NVf/form">
            Join Working Group
        </Link>
      </nav>
    </footer>
  )
}
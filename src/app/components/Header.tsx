import Link from 'next/link'
import DarkModeToggle from '../widgets/DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-primary text-text p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nick Deupree</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:underline hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
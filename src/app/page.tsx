import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Contact />
      </main>
      {/* <footer className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} Nick Deupree</p>
      </footer> */}
    </div>
  )
}
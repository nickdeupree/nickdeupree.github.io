import Link from 'next/link'

export default function About() {
  const skills = ['Java', 'Python', 'HTML/CSS', 'JavaScript', 'C', 'Swift', 'Git']

  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-text">About Me</h2>
      <div className="bg-card shadow-md rounded-lg p-6">
        <p className="mb-4 text-text-muted">Hi, I&apos;m Nick Deupree &amp; I'm a senior at the University of California, Santa Cruz, pursuing a career in software engineering.</p>
        <p className="mb-4 text-text-muted">I'm passionate about building software that solves real problems, and I'm actively developing personal projects to hone my skills and explore new technologies.</p>
        <p className="mb-4 text-text-muted">When I&apos;m not at the computer I enjoy wilderness camping, basketball, and staying fit.</p>
        <p className="mb-4 text-text-muted">
          Find me at{' '}
          <Link href="https://linkedin.com/in/nicholasdeupree/" className="text-blue-600 hover:underline">LinkedIn</Link>
          {' '}&amp;{' '}
          <Link href="https://github.com/nicholasdeupree/" className="text-blue-600 hover:underline">GitHub</Link>
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-text">Skills</h3>
        <ul className="list-disc list-inside text-text-muted">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

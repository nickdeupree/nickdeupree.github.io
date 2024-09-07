import Link from 'next/link'

export default function About() {
  const skills = ['Java', 'Python', 'HTML/CSS', 'JavaScript', 'C', 'Swift', 'Git']

  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">Hello! I'm Nick Deupree & currently a senior at the University of California, Santa Cruz.</p>
        <p className="mb-4">I want to work in the tech field as a software engineer and am currently working on personal projects to improve my skills.</p>
        <p className="mb-4">When I'm not at the computer I enjoy wilderness camping, basketball, and staying fit.</p>
        <p className="mb-4">
          Find me at{' '}
          <Link href="https://linkedin.com/in/nicholasdeupree/" className="text-blue-600 hover:underline">LinkedIn</Link>
          {' '}&{' '}
          <Link href="https://github.com/nicholasdeupree/" className="text-blue-600 hover:underline">GitHub</Link>
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
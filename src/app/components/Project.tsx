import Link from 'next/link'
import Image from 'next/image'

interface ProjectProps {
  title: string;
  github: string;
  link?: string;
  download?: string;
  description: string;
  image: string;
}

export default function Project({ title, github, link, download, description, image }: ProjectProps) {
  return (
    <div className="bg-card shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row">
      <div className="p-6 flex-1">
        <Link href={link || github} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold mb-2 text-text">{title}</h3>
        </Link>
        <h4 className="mb-2 text-sm text-text-muted">
          {link && (
            <>
                <Link href={link} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Visit Site</Link>
              {' | '}
            </>
          )}
          {download && (
            <>
              <Link href={download} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Download</Link>
              {' | '}
            </>
          )}
          <Link href={github} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Repo</Link>
        </h4>
        <p className="text-text-muted">{description}</p>
      </div>
      <div className="w-full md:w-1/3 relative">
        <Link href={link || github} target="_blank" rel="noopener noreferrer" className="h-full flex items-center justify-center">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={300}
            height={200}
            className="object-contain max-w-full max-h-64"
          />
        </Link>
      </div>
    </div>
  )
}
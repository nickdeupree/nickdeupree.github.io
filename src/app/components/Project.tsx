import Link from 'next/link'
import Image from 'next/image'

interface ProjectProps {
  title: string;
  github: string;
  description: string;
  image: string;
}

export default function Project({ title, github, description, image }: ProjectProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row">
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <h4 className="mb-2 text-sm text-gray-600">
          GitHub: <Link href={github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</Link>
        </h4>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="w-full md:w-1/3 relative">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
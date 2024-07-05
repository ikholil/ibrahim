import Image from "next/image";
import Link from "next/link";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/project/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const { id, thumb, title, description, githubLink } = data.project;
  return (
    <main className="container py-14 lg:py-28">
      <h2 className="text-center text-3xl font-semibold my-4">{title}</h2>
      <div className="grid grid-cols-12 gap-6">
        <div key={id} className="col-span-12 rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={thumb} width={400} height={250} alt="Project thumbnail" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <Link href={githubLink} className="text-blue-500 hover:underline">
              Github
            </Link>
            <a href={githubLink} className="text-blue-500 hover:underline">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

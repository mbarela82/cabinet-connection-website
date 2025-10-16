// app/portfolio/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { notFound } from "next/navigation";

interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  mainImage: any;
  images: any[];
  description: string;
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await client.fetch(
    `*[_type == "portfolioItem" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with main image */}
      <section className="relative h-64 sm:h-96">
        <Image
          src={urlFor(project.mainImage).url()}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Project details */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {project.title}
              </h1>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
            <Button asChild variant="outline">
              <Link href="/portfolio">← Back to Portfolio</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              {/* Add more details here */}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image: any, index: number) => (
                <div
                  key={index}
                  className="relative h-48 w-full rounded-lg overflow-hidden"
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={`${project.title} - detail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// app/portfolio/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

// Define the interface for portfolio items
interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  mainImage: any;
  images: any[];
  description: string;
  slug: string;
}

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch portfolio items from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "portfolioItem"] | order(_createdAt desc) {
            _id,
            title,
            category,
            mainImage,
            images,
            description,
            slug
          }`
        );
        setPortfolioItems(data);
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get unique categories
  const categories = [
    "all",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  // Filter items by category
  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-48 sm:h-64 md:h-72 pt-4 sm:pt-0">
        <Image
          src="/images/portfolio-hero.jpg"
          alt="Cabinet Connection Portfolio"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white w-full pt-4 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 mx-auto">
              Our Work
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto">
              A showcase of our commitment to quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Filtering Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item._id}
                className="h-full overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="relative h-48 sm:h-56 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(item.mainImage);
                    setIsOpen(true);
                  }}
                >
                  <Image
                    src={urlFor(item.mainImage).url()}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                  <Button asChild variant="outline" size="sm" className="mt-4">
                    <Link href={`/portfolio/${item.slug.current}`}>
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gray-800 hover:bg-gray-700 text-white"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Lightbox Dialog */}
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            <div className="relative h-[80vh]">
              <Image
                src={urlFor(selectedImage).url()}
                alt="Project detail"
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

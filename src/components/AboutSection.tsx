// components/AboutSection.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface AboutSectionProps {
  title: string;
  description: string[];
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function AboutSection({
  title,
  description,
  imageUrl,
  ctaText = "Learn Our Story",
  ctaLink = "/about",
}: AboutSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
            <div className="text-base text-gray-600 mb-6 leading-relaxed">
              {description.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button
              asChild
              className="bg-gray-800 hover:bg-gray-700 text-white"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src={imageUrl}
                alt="About us"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

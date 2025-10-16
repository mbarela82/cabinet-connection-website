// app/services/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services | Cabinet Connection",
  description:
    "From fully custom designs to quality prebuilt options, we have the perfect cabinetry solution for your home or business.",
};

export default function ServicesPage() {
  const brandLogos = [
    { name: "Sollid Cabinetry", logo: "/logos/sollid.webp" },
    { name: "1951 Cabinetry", logo: "/logos/1951.webp" },
    { name: "Tidwell Cabinetry", logo: "/logos/tidwell.webp" },
    { name: "PCS Cabinetry", logo: "/logos/pcs.webp" },
    { name: "US Cabinet Depot", logo: "/logos/us-cabinet.webp" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-48 sm:h-64 md:h-72 pt-4 sm:pt-0">
        <Image
          src="/images/services-hero.jpg"
          alt="Cabinet Connection Services"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white w-full pt-4 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 mx-auto">
              Our Services
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto">
              From fully custom designs to quality prebuilt options
            </p>
          </div>
        </div>
      </section>

      {/* Custom Cabinetry Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Custom Cabinetry Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              For a truly unique, tailored design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Kitchen Cabinets",
                desc: "Personal consultation to design a layout that maximizes your space and style.",
                img: "/images/kitchen-cabinets.jpg",
              },
              {
                title: "Custom Bathroom Vanities",
                desc: "Beautiful, practical vanities that maximize storage in any space.",
                img: "/images/bathroom-vanities.jpg",
              },
              {
                title: "Entertainment Centers",
                desc: "Seamlessly integrated solutions that add elegance and function.",
                img: "/images/entertainment.jpg",
              },
              {
                title: "Home Office Solutions",
                desc: "Custom-fit desks and workstations for a productive environment.",
                img: "/images/home-office.jpg",
              },
            ].map((service, index) => (
              <Card key={index} className="h-full overflow-hidden shadow-sm">
                <div className="relative h-32 sm:h-40">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-8 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Prebuilt & RTA Cabinetry
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Quality from trusted brands
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center w-24 sm:w-32"
              >
                <div className="relative h-10 sm:h-12 w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/commercial.jpg"
                  alt="Commercial Projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Commercial Projects
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                We bring the same high standards to select commercial projects.
              </p>
              <p className="text-gray-600">
                Our services include office kitchenettes, reception desks,
                retail displays, and multi-family unit solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized CTA */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation
          </p>
          <Button asChild className="text-base sm:text-lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

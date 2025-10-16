// app/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Cabinet Connection",
  description:
    "Learn about our family-owned cabinetry business serving Albuquerque since 1994",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - matching Services page style */}
      <section className="relative h-48 sm:h-64 md:h-72 pt-4 sm:pt-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Cabinet Connection - Our Story"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white w-full pt-4 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 mx-auto">
              Our Story
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto">
              A Family Tradition of Craftsmanship Since 1994
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                A Hands-On Family Team
              </h2>
              <p className="text-gray-600 mb-4">
                In 1994, our founder, Mario Barela, started Cabinet Connection
                with a simple mission: to provide New Mexico families with the
                best possible cabinetry and service at an honest price. Over
                three decades later, that mission remains the heart of our
                business, and our family remains at the heart of the work.
              </p>
              <p className="text-gray-600">
                The business today is a true family collaboration. Mario
                continues to lead the company, and you'll find both him and his
                son, Mark, working directly with clients on sales and design.
                Overseeing shop production is Mario's brother, John. But the
                truth is, you'll find all three of them—Mario, Mark, and John—in
                the workshop, personally crafting the cabinets that carry their
                family name. This hands-on approach from our leadership team is
                our core commitment to quality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Our Promise to You
              </h2>
              <p className="text-gray-600">
                For us, this has always been more than just a business—it's our
                family name on every cabinet we build. We are immensely proud of
                our long history in this community. It's a legacy of experience
                that allows us to deliver the lasting quality and dedicated
                service our customers deserve. We believe in what we do, and
                we're honored to continue building on that tradition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

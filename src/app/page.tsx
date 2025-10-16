// app/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cabinet Connection | Custom Cabinetry Solutions",
  description:
    "Premium custom cabinetry solutions for your home or business. Specializing in kitchens, bathrooms, and custom storage solutions.",
  keywords:
    "custom cabinets, kitchen cabinets, bathroom vanities, cabinet makers, home remodeling",
};

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Custom Cabinetry",
      shortDescription:
        "Solutions built from scratch to perfectly fit your space.",
      description:
        "Tailor-made designs for kitchens, bathrooms, and home offices where every detail is crafted to your specification.",
    },
    {
      id: 2,
      title: "Prebuilt Cabinets",
      shortDescription:
        "Stylish options from trusted brands for a faster timeline.",
      description:
        "We offer a curated selection of high-quality stock and prebuilt cabinets that provide excellent value and style.",
    },
    {
      id: 3,
      title: "Design & Installation",
      shortDescription:
        "Expert guidance from our family team, from start to finish.",
      description:
        "Our experienced team is involved in every step, ensuring a seamless process from the initial design to the final installation.",
    },
  ];

  const about = {
    title: "About Cabinet Connect",
    description:
      "With over 15 years of experience, we specialize in creating custom cabinetry that combines functionality with timeless design. Our team works closely with you to bring your vision to life.",
    imageUrl: "/images/about-us.jpg", // Add your image path here
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "The quality of craftsmanship exceeded our expectations. Our kitchen looks amazing!",
      author: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      id: 2,
      quote: "Professional service from start to finish. Highly recommend!",
      author: "Michael Chen",
      role: "Interior Designer",
    },
    {
      id: 3,
      quote: "The attention to detail was outstanding. Worth every penny.",
      author: "Emily Rodriguez",
      role: "Architect",
    },
  ];

  return (
    <>
      <Hero
        title="Crafting Albuquerque's Finest Custom Cabinets"
        subtitle="A Family Tradition of Quality Since 1994"
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
        backgroundImage="/images/hero-background.jpg"
      />

      <ServicesSection
        services={services}
        title="Our Services"
        description="Quality solutions for every project and budget."
      />

      <AboutSection
        title="A Family Tradition of Craftsmanship Since 1994"
        description={[
          "Cabinet Connection is a true family collaboration. We are personally involved in every project, from the initial design to the final installation in your home.",
          "This hands-on approach is our commitment to quality and our promise to you.",
        ]}
        imageUrl="/images/about-sunset.jpg"
      />

      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-medium">{testimonial.author}</div>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

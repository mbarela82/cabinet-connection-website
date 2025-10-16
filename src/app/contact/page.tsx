// app/contact/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Cabinet Connection",
  description: "Get in touch with our team to start your cabinetry project",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-48 sm:h-64 md:h-72 pt-4 sm:pt-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Cabinet Connection"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white w-full pt-4 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 mx-auto">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto">
              Let's start the conversation about your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Showroom & Shop
                </h2>
                <p className="text-gray-600">2605 Princeton Dr NE, Ste B</p>
                <p className="text-gray-600">Albuquerque, NM 87107</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Phone</h2>
                <p className="text-gray-600">Office: (505) 336-1819</p>
                <p className="text-gray-600">Mario Barela: (505) 480-9672</p>
                <p className="text-gray-600">Mark Barela: (505) 379-7319</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Email</h2>
                <p className="text-blue-600 hover:underline">
                  info@cabinetconnect.net
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Hours</h2>
                <p className="text-gray-600">
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
                <p className="text-gray-600">Saturday & Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

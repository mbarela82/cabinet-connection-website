// components/ServicesSection.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Service {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  icon?: React.ReactNode;
}

interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export default function ServicesSection({
  services,
  title = "Our Services",
  subtitle = "Quality solutions for every project and budget.",
}: ServicesSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="h-full border-2 border-gray-100 hover:border-primary transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-primary hover:underline font-medium inline-flex items-center"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

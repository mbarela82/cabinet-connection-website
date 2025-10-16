// components/CTA.tsx
import Link from "next/link";
import { Button } from "./ui/button";

interface CTAProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  background?: "light" | "dark";
}

export default function CTA({
  title,
  description,
  ctaText,
  ctaLink,
  background = "dark",
}: CTAProps) {
  return (
    <section
      className={`py-16 ${
        background === "dark"
          ? "bg-gray-900 text-white"
          : "bg-primary text-white"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Button asChild size="lg" className="text-lg">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}

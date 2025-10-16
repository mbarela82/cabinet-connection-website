// components/Hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
          {secondaryCtaText && secondaryCtaLink && (
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

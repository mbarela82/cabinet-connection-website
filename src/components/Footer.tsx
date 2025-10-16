// components/Footer.tsx
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <Link href="/" className="text-white transition-colors">
                Cabinet Connection
              </Link>
            </h3>
            <p className="mb-4 text-gray-300">
              Family-owned and serving Albuquerque since 1994.
            </p>
            <address className="not-italic text-gray-300">
              <p>2605 Princeton Dr NE, Ste B</p>
              <p>Albuquerque, NM 87107</p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
            <p className="mb-2 text-gray-300">Office: (505) 336-1819</p>
            <p className="text-gray-300">info@cabinetconnect.net</p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cabinet Connection. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

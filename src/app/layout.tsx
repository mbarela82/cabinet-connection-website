// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

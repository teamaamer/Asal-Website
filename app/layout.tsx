import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASAL Technologies - Engineered for Innovation | Global Software Development & R&D Partner",
  description: "Global software development and R&D partner delivering enterprise-grade engineering solutions. 450+ engineers. 26+ years of experience. ISO 27001 & 27701 certified. Nearshore advantage.",
  keywords: "software development partner, nearshore software development, engineering teams, enterprise software development, AI development services, digital transformation, R&D services, managed engineering teams, data engineering, ISO 27001 certified, ISO 27701 certified, product engineering, cloud DevOps",
  openGraph: {
    title: "ASAL Technologies - Engineered for Innovation",
    description: "Global Software Development & R&D Partner. 450+ engineers. 26+ years. ISO 27001 & 27701 certified. Nearshore advantage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

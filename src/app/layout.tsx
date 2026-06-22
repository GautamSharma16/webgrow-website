import type { Metadata } from "next";
import { Inter, Poppins, Sora, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ExitIntent from "@/components/ExitIntent";
import LeadMagnet from "@/components/LeadMagnet";
import LiveChat from "@/components/LiveChat";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebGrow Technologies - Engineering Digital Growth",
  description: "WebGrow Technologies is a global IT Solutions, AI Automation, Custom Software Development, and Digital Marketing Agency helping startups and enterprises scale.",
  metadataBase: new URL("https://webgrowtech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WebGrow Technologies | Engineering Digital Growth",
    description: "Enterprise software, AI agent systems, and digital growth campaigns.",
    url: "https://webgrowtech.com",
    siteName: "WebGrow Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject Organization Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebGrow Technologies",
    "image": "https://webgrowtech.com/my_logo.png",
    "url": "https://webgrowtech.com",
    "telephone": "+91-91620-00000",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bandra Kurla Complex, G Block",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400051",
      "addressCountry": "IN"
    },
    "tagline": "Helping Businesses Grow Through Technology & Marketing",
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://github.com"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${sora.variable} ${manrope.variable} h-full antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {/* Sticky Header */}
          <Navbar />
          
          {/* Main Content Area */}
          <main className="flex-grow pt-[68px]">
            {children}
          </main>

          {/* Marketing & Interactive Overlays */}
          <CookieConsent />
          <ExitIntent />
          <LeadMagnet />
          <LiveChat />
          <WhatsAppWidget />

          {/* Footer Area */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

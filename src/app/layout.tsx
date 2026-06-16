import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Sahasra Enterprises: Premium Tissue Products",
  description:
    "Sri Sahasra Enterprises. Premium quality tissue solutions for homes, restaurants, hotels, and businesses in Hyderabad, Telangana. Soft, Hard, Premium & Printed Logo tissues.",
  keywords: [
    "tissue paper",
    "soft tissue",
    "hard tissue",
    "premium tissue",
    "printed logo tissue",
    "Hyderabad",
    "Sri Sahasra",
    "tissue supplier",
  ],
  openGraph: {
    title: "Sri Sahasra Enterprises: Premium Tissue Products",
    description: "Premium tissue solutions crafted with excellence.",
    locale: "en_IN",
    type: "website",
    siteName: "Sri Sahasra Enterprises",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-obsidian text-cream antialiased overflow-x-hidden">
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

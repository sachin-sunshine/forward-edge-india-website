import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forward Edge India | Public Sector Consulting",
  description:
    "Forward Edge India helps governments govern better through policy design, governance reform, capacity building, and digital public infrastructure across India and South Asia.",
  keywords:
    "public sector consulting, governance reform, policy design, capacity building, India, South Asia",
  openGraph: {
    title: "Forward Edge India | Public Sector Consulting",
    description:
      "Empowering Governments. Strengthening Governance. We work with public institutions to design policy, build capacity, and deliver reform.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://mananbhardwaj.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manan Bhardwaj — Product Engineer",
  description:
    "Manan Bhardwaj brings imagination to life through clean, simple web and cloud-native applications, with deep work across AI, machine learning, and deep learning.",
  keywords: [
    "Manan Bhardwaj",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "AI Developer Portfolio",
  ],
  authors: [{ name: "Manan Bhardwaj" }],
  openGraph: {
    title: "Manan Bhardwaj — Product Engineer",
    description:
      "Building scalable web and cloud-native applications, while exploring AI, ML and DL.",
    url: siteUrl,
    siteName: "Manan Bhardwaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Bhardwaj — Product Engineer",
    description:
      "Building scalable web and cloud-native applications, while exploring AI, ML and DL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

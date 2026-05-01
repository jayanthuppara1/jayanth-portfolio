import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayanth Uppara - Data Analyst, BI Engineer, AI Analytics Builder",
  description: "Portfolio of Jayanth Uppara. Data pipelines, dashboards, and AI-assisted analytics systems that turn raw data into business decisions.",
  keywords: ["data analyst", "BI engineer", "data engineer", "analytics", "AI"],
  openGraph: {
    title: "Jayanth Uppara",
    description: "Data Analyst | BI Engineer | Data Engineer | AI Analytics Builder",
    url: "https://jayanth-portfolio.vercel.app",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <Navigation />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

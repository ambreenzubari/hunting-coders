import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/foorer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunting Coder",
  description: "A blog for coders by a coder",
  icons: {
    icon: "./favicon.ico",
  },
  manifest: "./manifest.json",
  // Add keywords for SEO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar should be inside the body */}
        <div className="pt-[60px]">
          {/* Adjust this value based on your navbar height */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

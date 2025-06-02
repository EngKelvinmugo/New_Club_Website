"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Mut Ajira Digital Club",
//   description: "Empowering students through technology and innovation",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard"); // Adjust the path if needed

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Ajira.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Hide Navigation on Dashboard pages */}
          {!isDashboard && <Navigation />}
          <main className="flex-grow transition-all duration-300 ease-in-out">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

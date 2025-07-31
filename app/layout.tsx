import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohmmed Omer Portfolio",
  description: "Modern & JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >

      <Gradient/>
        <RectangleTransition />
        
        <PageTransition >

                <div className="flex min-h-screen">
          {/* Sidebar visible on large screens (≥1024px) */}
          <aside className="hidden lg:flex w-[285px] bg-secondary text-white">
            <MainNav />
          </aside>

          {/* Main content area */}
          <main className="flex-1 px-4 py-6 max-w-[1130px] mx-auto w-full">
            <header className="mb-6">
              <Header />
              </header>
            <section>{children}</section>
          </main>
        </div>


        </PageTransition>

      </body>
    </html>
  );
}

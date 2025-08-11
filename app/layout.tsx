import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Gradient from "@/components/Gradient";
import RectangleTransition from "@/components/RectangleTransition";
import PageTransition from "@/components/PageTransition";
import ClientLayout from "./ClientLayout"; // Importing the new client component

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
        <PageTransition>
          <ClientLayout>{children}</ClientLayout>
        </PageTransition>
      </body>
    </html>
  );
}

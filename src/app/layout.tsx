import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jouney Bites",
  description: "2024 Node前端專班 - 北四組",
};

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { HamburgerMenu } from "@/components/ui/HamburgerMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <HamburgerMenu id='hamburgerMenu'/>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/css/globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
   template: "%s | Portfolio - Sehee Jang",
   default: "Portfolio - Sehee Jang",
  },
  description: "Sehee's Portfolio",
  keywords: ['portfolio'],
  creator: "장세희"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}

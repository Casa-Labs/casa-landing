import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/layouts/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "CASA",
    template: "%s | CASA",
  },
  description: "",
  keywords: ["Designer", "Developer", "Entrepreneur"],
  creator: "Rahul Gajbhiye",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-extension-installed="true" data-qb-installed="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}

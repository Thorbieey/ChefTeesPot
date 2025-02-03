import type { Metadata } from "next";
import { Geist, Geist_Mono, Delius, Noto_Sans, Srisakdi } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const delius = Delius({
  weight: "400",
  variable: "--font-delius",
  subsets: ["latin"],
});

const srisakdi = Srisakdi({
  weight: "400",
  variable: "--font-srisakdi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chef Tee's Pot",
  description: "IFE by Chef Tee's Pot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${notoSans.variable} relative ${delius.variable} ${geistMono.variable} ${srisakdi.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* <script async src="../node_modules/flyonui/flyonui.js"></script> */}
      </body>
    </html>
  );
}

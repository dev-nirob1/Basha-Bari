import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BashaBari - Modern Real Estate",
  description: "Find your dream home with BashaBari. Browse the latest rental properties in your area.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}

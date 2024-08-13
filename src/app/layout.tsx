import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/sidebar";
import {Spotlight} from "@/components/ui/spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Components",
  description: "These are components that I find useful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={"flex h-screen md:overflow-hidden bg-black/[0.96] bg-grid-white/[0.02]"}>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <Sidebar />
        <div className="flex-grow md:overflow-y-auto">
          <div className={"py-4 pl-4 pr-6"}>
            {children}
          </div>
        </div>
      </div>
      </body>
    </html>
  );
}

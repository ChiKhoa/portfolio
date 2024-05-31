import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ViewFullScreen } from "@/components/view-full-screen";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sunny Biolie",
    template: "%s",
  },
  description: "Phạm Nguyễn Chí Khoa's portfolio / SunnyBiolie",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <Toaster />
        {children}
        <ViewFullScreen />
      </body>
    </html>
  );
}

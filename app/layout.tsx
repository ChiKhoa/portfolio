import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { ViewFullScreen } from "@/components/view-full-screen";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Toaster />
        <ScrollArea className="w-screen h-screen">
          <div className="lg:max-w-4xl md:max-w-3xl w-screen px-3 md:px-0 md:m-auto">
            <Header />
            <Sidebar />
            {children}
            <Footer />
          </div>
          <ViewFullScreen />
        </ScrollArea>
      </body>
    </html>
  );
}

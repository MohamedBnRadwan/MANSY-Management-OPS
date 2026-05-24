import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AosProvider } from "@/components/AosProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mansymanagementops.com"),
  title: {
    default: "Mansy Management Ops.",
    template: "%s | Mansy Management Ops.",
  },
  description:
    "Property management and leasing strategy for commercial, administrative, retail, and mixed-use assets.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AosProvider />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

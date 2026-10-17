import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: {
    default: "Porter Pakistan - Travel With Freedom",
    template: "%s | Porter Pakistan",
  },
  description:
    "Pakistan's first one stop solution for travel enthusiasts looking to book travel services: tours, verified hotels, car rental, beach huts and farmhouses.",
  keywords: [
    "Pakistan tour",
    "northern areas",
    "Hunza",
    "Skardu",
    "hotels",
    "car rental",
    "trip planner",
  ],
  openGraph: {
    title: "Porter Pakistan - Travel With Freedom",
    description:
      "Design your perfect trip within a minute with Trip Designer.",
    siteName: "Porter Pakistan",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#199171",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

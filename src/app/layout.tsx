import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/Chat/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioEnergy",
  description: "Site BioEnergy – O site voltado para energia sustentável",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "BioEnergy",
    description: "Site BioEnergy – O site voltado para energia sustentável",
    images: [
      {
        url: "https://dvbzyrarvfhjqssoytlv.supabase.co/storage/v1/object/public/profile-images/Capturas_do_Site/14-BioEnergy.png", // URL externa
        width: 1200,
        height: 630,
        alt: "BioEnergy - Energia Sustentável",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioEnergy",
    description: "Site BioEnergy – O site voltado para energia sustentável",
    images: ["https://dvbzyrarvfhjqssoytlv.supabase.co/storage/v1/object/public/profile-images/Capturas_do_Site/14-BioEnergy.png"], // URL externa
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
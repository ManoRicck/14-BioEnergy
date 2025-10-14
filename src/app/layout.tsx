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
    title: "TCC Faculdade",
    description: "Site BioEnergy – O site voltado para energia sustentável",
    images: [
      {
        url: "/page.png", // ← IMAGEM LOCAL!
        width: 1200,
        height: 630,
        alt: "BioEnergy - Energia Sustentável",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCC Faculdade",
    description: "Site BioEnergy – O site voltado para energia sustentável",
    images: ["/page.png"], // ← IMAGEM LOCAL!
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
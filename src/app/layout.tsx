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
  keywords: [
    "Henrique",
    "Henrique Expedito",
    "Front-End Developer",
    "Web Developer Brasil",
    "Portfolio ManoRicck",
    "Bioenergy",
  ],
  themeColor: "#030014",
  applicationName: "BioEnergy",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: "https://14-bioenergy.vercel.app/",
    title: "TCC Faculdade",
    description: "Site BioEnergy – O site voltado para energia sustentável",
    images: [
      {
        url: "/public/page.png"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCC Faculdade",
    description: "Site BioEnergy – O site voltado para energia sustentável",
    images: [
      "/public/page.png",
    ],
  },
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
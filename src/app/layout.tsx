import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ui = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forteca Cleaning — Professional Property Cleaning in the Poconos",
  description:
    "Premium turnover, deep, and recurring cleaning for vacation rentals, homes, and businesses across Pennsylvania's Pocono region — backed by the Forteca Estate standard.",
  icons: {
    icon: "/favicon-32.png",
    shortcut: "/favicon-32.png",
    apple: "/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <head>
        <link rel="icon" href="/favicon-32.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

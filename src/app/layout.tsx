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
  metadataBase: new URL('https://fortecacleaning.com'),
  title: {
    default: 'Forteca Cleaning | Vacation Rental Cleaning Services',
    template: '%s | Forteca Cleaning',
  },
  description:
    'Professional cleaning and turnover services for vacation rentals and homes in the Pocono Mountains.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Forteca Cleaning | Vacation Rental Cleaning Services',
    description: 'Professional cleaning and turnover services for vacation rentals in the Poconos.',
    url: 'https://fortecacleaning.com',
    siteName: 'Forteca Cleaning',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forteca Cleaning — Professional Vacation Rental Cleaning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forteca Cleaning | Vacation Rental Cleaning Services',
    description: 'Professional cleaning and turnover services for vacation rentals in the Poconos.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  );
}

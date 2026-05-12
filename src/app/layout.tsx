import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-SV8HCDKMVL";

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
  keywords: [
    'vacation rental cleaning',
    'Airbnb cleaning service',
    'Pocono Mountains cleaning',
    'turnover cleaning service',
    'short-term rental cleaning',
    'property cleaning Pennsylvania',
    'Forteca Cleaning',
  ],
  robots: { index: true, follow: true },
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Forteca Cleaning",
              url: "https://fortecacleaning.com",
              description: "Professional cleaning and turnover services for vacation rentals and homes in the Pocono Mountains.",
              email: "fortecacleaning@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Stroudsburg",
                addressRegion: "PA",
                postalCode: "18360",
                addressCountry: "US",
              },
              areaServed: "Pocono Mountains, Pennsylvania",
              sameAs: [
                "https://www.facebook.com/FortecaEstate/",
                "https://www.instagram.com/fortecaestate/",
              ],
              parentOrganization: {
                "@type": "Organization",
                name: "Forteca Estate",
                url: "https://fortecaestate.com",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "ingapircaecuador.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Ingapirca Archaeological Complex — Cañar, Ecuador",
      template: "%s | Ingapirca Archaeological Complex",
    },
    description:
      "A travel guide to the Ingapirca Archaeological Complex in Cañar, Ecuador. Explore the largest Inca ruins in Ecuador, featuring the Temple of the Sun and unique Cañari-Inca cultural fusion.",
    keywords: [
      "Ingapirca Archaeological Complex",
      "Complejo Arqueológico Ingapirca",
      "Ingapirca Ecuador",
      "Inca ruins Ecuador",
      "Templo del Sol",
      "Cañar archaeological site",
      "Ecuador tourism",
      "Inca astronomy",
      "Cañari culture",
    ],
    authors: [{ name: "Ingapirca Archaeological Complex Travel Guide" }],
    creator: "Ingapirca Archaeological Complex Travel Guide",
    publisher: "Ingapirca Archaeological Complex Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_CN"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title: "Ingapirca Archaeological Complex — Cañar, Ecuador",
      description:
        "A travel guide to the Ingapirca Archaeological Complex in Cañar, Ecuador. Explore the largest Inca ruins in Ecuador.",
      siteName: "Ingapirca Archaeological Complex Travel Guide",
      images: [
        {
          url: "/gallery/ingapirca-archaeological-complex (1).jpg",
          width: 1200,
          height: 630,
          alt: "Ingapirca Archaeological Complex - Ecuador",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ingapirca Archaeological Complex — Cañar, Ecuador",
      description:
        "A travel guide to the Ingapirca Archaeological Complex in Cañar, Ecuador.",
      images: ["/gallery/ingapirca-archaeological-complex (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

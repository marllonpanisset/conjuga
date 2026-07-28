import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/layout";
import { MotionProvider } from "@/components/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import {
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import "./globals.css";

const defaultSocialImage = {
  url: new URL(siteConfig.openGraphImage.path, siteConfig.url).toString(),
  width: siteConfig.openGraphImage.width,
  height: siteConfig.openGraphImage.height,
  alt: siteConfig.openGraphImage.alt,
};

/**
 * Global metadata provides default SEO information for all routes.
 *
 * Individual pages can override these values using generateMetadata(),
 * while keeping consistent defaults for search engines and social sharing.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default: `${siteConfig.name} — Estúdio digital de engenharia e tecnologia`,
    template: `%s — ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],

  creator: siteConfig.author.name,

  publisher: siteConfig.legalName,

  category: "technology",

  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — Estúdio digital de engenharia e tecnologia`,
    description: siteConfig.description,
    locale: siteConfig.locale.replace("-", "_"),
    siteName: siteConfig.name,
    images: [defaultSocialImage],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Estúdio digital de engenharia e tecnologia`,
    description: siteConfig.description,
    images: [defaultSocialImage.url],
  },
};

const spaceGrotesk = localFont({
  src: [
    {
      path: "./fonts/SpaceGrotesk/SpaceGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SpaceGrotesk/SpaceGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-body",
  display: "swap",
  preload: false,
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />

        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

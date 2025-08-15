import "./globals.css";

export const metadata = {
  title: {
    default: "Штукатурные станции купить | Штукатурная станция 220 / 380 В с доставка по РФ и СНГ",
    template: "%s | NOVA - Штукатурные станции"
  },
  description: "Профессиональные штукатурные станции PERSONIYA от производителя. 12 моделей 220/380В, гарантия 3 года, доставка по РФ. Механизированная штукатурка с производительностью до 500 м²/смена.",
  keywords: [
    "штукатурные станции",
    "штукатурная станция купить",
    "PERSONIYA",
    "NOVA",
    "машинная штукатурка",
    "штукатурное оборудование",
    "механизированная штукатурка",
    "станция 220 вольт",
    "станция 380 вольт",
    "производство штукатурных станций",
    "шнековые насосы",
    "растворонасос",
    "ставрополь"
  ],
  authors: [{ name: "NOVA" }],
  creator: "NOVA",
  publisher: "NOVA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://litvinenko88.github.io/plastering_stations/",
    siteName: "NOVA - Штукатурные станции",
    title: "Штукатурные станции PERSONIYA - Профессиональное оборудование",
    description: "Профессиональные штукатурные станции PERSONIYA от производителя. 12 моделей, гарантия 3 года, доставка по РФ",
    images: [
      {
        url: "https://litvinenko88.github.io/plastering_stations/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Штукатурные станции PERSONIYA"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Штукатурные станции PERSONIYA",
    description: "Профессиональное оборудование для механизированной штукатурки",
    images: ["https://litvinenko88.github.io/plastering_stations/images/og-image.jpg"]
  },
  alternates: {
    canonical: "https://litvinenko88.github.io/plastering_stations/"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />

        <meta name="theme-color" content="#7d010b" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="RU-STA" />
        <meta name="geo.placename" content="Ставрополь" />
        <meta name="ICBM" content="45.0428,41.9734" />
        <link rel="preload" href="/videos/fon_video.mp4" as="video" type="video/mp4" crossOrigin="anonymous" />
        <link rel="preload" href="/images/products/Persona 220_380_1 (1).webp" as="image" />
        <link rel="preconnect" href="https://rutube.ru" />
        <link rel="dns-prefetch" href="https://rutube.ru" />
        <link rel="icon" href="/icons/favicon.png" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
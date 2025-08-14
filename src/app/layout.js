import "./globals.css";

export const metadata = {
  title: {
    default: "Штукатурные станции купить | Штукатурная станция 220 / 380 В с доставка по РФ и СНГ",
    template: "%s | NOVA - Штукатурные станции"
  },
  description: "Профессиональные штукатурные станции для механизированного нанесения смесей ✅ Выгодные предложения на штукатурное оборудование ✅ Все типы и модели станций в наличии ✅ Быстрая доставка ✅Собственное производство. Закажи машинную штукатурку с гарантией качества!",
  keywords: [
    "штукатурные станции",
    "штукатурная станция купить",
    "PERSONIYA",
    "машинная штукатурка",
    "штукатурное оборудование",
    "механизированная штукатурка",
    "станция 220 вольт",
    "станция 380 вольт",
    "производство штукатурных станций"
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7d010b" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
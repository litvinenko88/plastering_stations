import "./globals.css";

export const metadata = {
  title: "Штукатурные станции купить | Штукатурная станция 220 / 380 В с доставка по РФ и СНГ",
  description: "Профессиональные штукатурные станции для механизированного нанесения смесей ✅ Выгодные предложения на штукатурное оборудование ✅ Все типы и модели станций в наличии ✅ Быстрая доставка ✅Собственное производство. Закажи машинную штукатурку с гарантией качества!",
  keywords: "штукатурные станции, штукатурная станция купить, машинная штукатурка, штукатурное оборудование, механизированная штукатурка",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Штукатурные станции NOVA - Профессиональное оборудование",
    description: "Профессиональные штукатурные станции с доставкой по РФ и СНГ",
    type: "website",
    locale: "ru_RU"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nova-plastering.ru" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
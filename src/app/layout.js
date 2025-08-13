import "./globals.css";

export const metadata = {
  title: "Plastering Stations",
  description: "Штукатурные станции - профессиональное оборудование",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
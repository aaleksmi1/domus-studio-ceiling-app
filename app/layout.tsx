import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Семейная стоматология — имплантация в Пятигорске",
  description: "Имплантация, лечение и диагностика зубов для всей семьи в Пятигорске.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}

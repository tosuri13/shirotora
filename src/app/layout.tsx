import { Header } from "@/components/Header";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Shirotora",
  description:
    "神戸市営地下鉄西神・山手線の時刻表を見やすく表示してくれるWebアプリケーション",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="h-dvh w-dvw bg-white">
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

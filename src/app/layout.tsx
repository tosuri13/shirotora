import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shirotora",
	description:
		"神戸市営地下鉄西神・山手線の時刻表を見やすく表示してくれるWebアプリケーション",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Launch Countdown",
  description: "A webpage for launch countdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatText.variable}`}>
        {children}
      </body>
    </html>
  );
}

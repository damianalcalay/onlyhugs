import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONLYHUGS - ONLYFANS AGENCY",
  description: "ONLYFANS AGENCY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

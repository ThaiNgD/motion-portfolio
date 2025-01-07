import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Attemp to Frontend Master",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

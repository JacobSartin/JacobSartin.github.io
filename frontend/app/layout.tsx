import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    template: "%s | JacobSartin.com",
    default: "Home | JacobSartin.com",
  },
  description:
    "Software developer passionate about creating elegant solutions to complex problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/14cfe25195.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={jetbrainsMono.variable}
        style={{
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', sans-serif",
        }}
      >
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

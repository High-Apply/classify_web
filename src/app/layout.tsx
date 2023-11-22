import Navbar from "@/components/nav/navbar";
import { nanumGothic } from "@/fonts/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://classify.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Classify",
    description: "Next Education with Next Application",
    url: "https://classify.kr",
    siteName: "Classify",
    images: [
      {
        url: "https://imgur.com/XeNroR0.png",
      },
    ],
    locale: "ko_KR",
    type: "website",
    alternateLocale: "en_US",
    countryName: "Seoul",
    emails: ["standardstar@hanyang.ac.kr", "highapply@gmail.com"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <title>클래시파이</title>
      </head>
      <body className={nanumGothic.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

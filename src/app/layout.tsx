import { nanumGothic } from "@/fonts/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Classify",
  description: "Next Education with Next LMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={nanumGothic.className}>{children}</body>
    </html>
  );
}

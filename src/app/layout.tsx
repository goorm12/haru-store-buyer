import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "하루상점 | Haru Store",
  description: "좋아하는 상점의 공동구매",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

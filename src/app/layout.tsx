import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Providers } from "@/provider";

const mostserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ynnsuis's portfolio",
  description: "프론트엔드 개발자 장윤수의 포트폴리오 사이트 입니다.",
  openGraph: {
    title: "Ynnsuis's portfolio",
    description: "프론트엔드 개발자 장윤수의 포트폴리오 사이트 입니다.",
    images:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/ynnsuis_og.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-dark relative">
      <body className={mostserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

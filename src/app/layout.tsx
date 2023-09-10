import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ThemeContextProvider from "@/provider/ThemeProvider";
import MouseEffectProvider from "@/provider/MouseEffectProvider";
import ProjectModalProvider from "@/provider/ProjectModalProvider";
import RecoilProvider from "@/provider/ReocoilProvider";
import Header from "../components/Molecules/Header";

const mostserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ynnsuis's portfolio",
  description: "Ynnsuis's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-dark px-5 md:px-0">
      <body className={mostserrat.className}>
        <ThemeContextProvider>
          <RecoilProvider>
            <ProjectModalProvider>
              <MouseEffectProvider>
                <Header />
                <main className="w-full max-w-[1000px] mx-auto pt-10">
                  {children}
                </main>
              </MouseEffectProvider>
            </ProjectModalProvider>
          </RecoilProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

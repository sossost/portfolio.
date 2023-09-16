import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ThemeContextProvider from "@/provider/ThemeProvider";
import MouseEffectProvider from "@/provider/MouseEffectProvider";
import ProjectModalProvider from "@/provider/ProjectModalProvider";
import RecoilProvider from "@/provider/ReocoilProvider";
import SpaceBackgroundProvider from "@/provider/SpaceBackgroundProvider";
import MobileMenuModalProvider from "@/provider/MobileMenuProvider";

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
    <html lang="en" className="bg-dark relative">
      <body className={mostserrat.className}>
        <ThemeContextProvider>
          <RecoilProvider>
            <MobileMenuModalProvider>
              <ProjectModalProvider>
                <MouseEffectProvider>{children}</MouseEffectProvider>
                <SpaceBackgroundProvider />
              </ProjectModalProvider>
            </MobileMenuModalProvider>
          </RecoilProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

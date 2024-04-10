import React, { ReactNode } from "react";
import ThemeContextProvider from "./ThemeProvider";
import RecoilProvider from "./ReocoilProvider";
import MobileMenuModalProvider from "./MobileMenuProvider";
import ProjectModalProvider from "./ProjectModalProvider";
import MouseEffectProvider from "./MouseEffectProvider";
import SpaceBackgroundProvider from "./SpaceBackgroundProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
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
  );
};

"use client";

import Header from "@/components/Molecules/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-10 w-full h-full min-h-screen">
      <Header />
      <main className="w-full max-w-[900px] mx-auto px-5  pt-32">
        {children}
      </main>
    </div>
  );
};

export default Layout;

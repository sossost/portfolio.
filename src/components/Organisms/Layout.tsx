"use client";

import Header from "@/components/Molecules/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-5 z-10 w-full h-full min-h-screen">
      <Header />
      <main className="w-full max-w-[900px] mx-auto pt-8 md:pt-[8vh]">
        {children}
      </main>
    </div>
  );
};

export default Layout;

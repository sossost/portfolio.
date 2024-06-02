"use client";

import Header from "@/components/Molecules/Header";
import { useSearchParams } from "next/navigation";
import { Children, ReactNode, isValidElement } from "react";
import MainTemplate from "../Templates/MainTemplate";

const Layout = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  if (!category) {
    return <MainTemplate />;
  }

  return (
    <div className="z-10 w-full h-full min-h-screen">
      <Header />
      <main className="w-full max-w-[900px] mx-auto px-5  pt-32">
        {Children.map(children, (child) => {
          if (isValidElement(child) && child.key === category) {
            return child;
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default Layout;

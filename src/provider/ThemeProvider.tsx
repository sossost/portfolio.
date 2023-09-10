"use client";

import { ThemeProvider } from "next-themes";

/**
 * @description 다크모드 설정을 위한 프로바이더
 * @author 장윤수
 * @date 2023-09-11
 * @version 1.0
 */

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeContextProvider;

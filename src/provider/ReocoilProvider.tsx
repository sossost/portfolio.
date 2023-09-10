"use client";

import { RecoilRoot } from "recoil";

const RecoilProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;

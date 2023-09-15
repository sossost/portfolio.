"use client";

import { LINK } from "@/constants/link";
import { pageState } from "@/store/pageAtom";
import { useRecoilValue } from "recoil";

import AboutTemplate from "@/components/Templates/AboutTemplate";
import MainTemplate from "@/components/Templates/MainTemplate";
import ProjectTemplate from "@/components/Templates/ProjectTemplate";
import ContactTemplate from "@/components/Templates/ContactTemplate";
import Layout from "@/components/Organisms/Layout";

export default function Home() {
  const page = useRecoilValue(pageState);

  return (
    <>
      {page === LINK.MAIN ? (
        <MainTemplate />
      ) : (
        <Layout>
          {page === LINK.ABOUT && <AboutTemplate />}
          {page === LINK.PROJECT && <ProjectTemplate />}
          {page === LINK.CONTACT && <ContactTemplate />}
        </Layout>
      )}
    </>
  );
}

"use client";

import { LINK } from "@/constants/link";

import Layout from "@/components/Organisms/Layout";
import AboutTemplate from "@/components/Templates/AboutTemplate";
import MainTemplate from "@/components/Templates/MainTemplate";
import ProjectTemplate from "@/components/Templates/ProjectTemplate";
import ContactTemplate from "@/components/Templates/ContactTemplate";
import ResumeTemplate from "@/components/Templates/ResumeTemplate";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  return (
    <>
      {!page ? (
        <MainTemplate />
      ) : (
        <Layout key={page}>
          {page === LINK.ABOUT && <AboutTemplate />}
          {page === LINK.PROJECT && <ProjectTemplate />}
          {page === LINK.CONTACT && <ContactTemplate />}
          {page === LINK.RESUME && <ResumeTemplate />}
        </Layout>
      )}
    </>
  );
}

"use client";

import Layout from "@/components/Organisms/Layout";
import AboutTemplate from "@/components/Templates/AboutTemplate";
import ProjectTemplate from "@/components/Templates/ProjectTemplate";
import ContactTemplate from "@/components/Templates/ContactTemplate";
import ResumeTemplate from "@/components/Templates/ResumeTemplate";
import { LINK } from "@/constants/link";

export default function Home() {
  return (
    <Layout>
      <AboutTemplate key={LINK.ABOUT} />
      <ProjectTemplate key={LINK.PROJECT} />
      <ContactTemplate key={LINK.CONTACT} />
      <ResumeTemplate key={LINK.RESUME} />
    </Layout>
  );
}

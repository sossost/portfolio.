"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useFetchMd } from "@/hooks/useFetchMd";
import { LINK } from "@/constants/link";

import FadeInWrapper from "../Atoms/FadeInWrapper";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import NextStep from "../Organisms/NextStep";
import MarkdownRenderer from "../Atoms/MarkdownRenderer";

const AboutTemplate = () => {
  const mdContent = useFetchMd(LINK.ABOUT);

  useScrollToTop();

  return (
    <PageLayout>
      <FadeInWrapper time={200}>
        <h1 className="tracking-widest">HI I&apos;M JANG YOON SU</h1>
      </FadeInWrapper>

      <FadeInWrapper time={400}>
        <h2 className="font-light tracking-[10px]">FRONTEND DEVELOPER</h2>
      </FadeInWrapper>

      <Spacing className="h-2" />

      <FadeInWrapper time={600} className="flex flex-col gap-3">
        <MarkdownRenderer markdownContent={mdContent} />
      </FadeInWrapper>

      <FadeInWrapper time={800} className="w-fit">
        <NextStep page={LINK.PROJECT} text="프로젝트 보러가기" />
      </FadeInWrapper>
    </PageLayout>
  );
};

export default AboutTemplate;

"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";

import FadeInWrapper from "../Atoms/FadeInWrapper";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import NextStep from "../Organisms/NextStep";

const AboutTemplate = ({ content }: { content: string }) => {
  useScrollToTop();

  return (
    <PageLayout>
      <FadeInWrapper time={200}>
        <h1 className="tracking-widest">HI I'M JANG YOON SU</h1>
      </FadeInWrapper>

      <FadeInWrapper time={400}>
        <h2 className="font-light tracking-[10px]">FRONTEND DEVELOPER</h2>
      </FadeInWrapper>

      <Spacing className="h-2" />

      <FadeInWrapper time={600} className="flex flex-col gap-3">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-lg font-light leading-10"
        />
      </FadeInWrapper>

      <FadeInWrapper time={800} className="w-fit">
        <NextStep href="/project" text="프로젝트 보러가기" />
      </FadeInWrapper>
    </PageLayout>
  );
};

export default AboutTemplate;

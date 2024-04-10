"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { LINK } from "@/constants/link";

import FadeInWrapper from "../Atoms/FadeInWrapper";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import NextStep from "../Organisms/NextStep";

const AboutTemplate = () => {
  useScrollToTop();

  return (
    <PageLayout>
      <FadeInWrapper time={200} className="flex flex-col md:flex-row">
        <h1 className="tracking-widest">HI I&apos;M</h1>
        <h1 className="tracking-widest">JANG YOON SU</h1>
      </FadeInWrapper>

      <FadeInWrapper time={400}>
        <h2 className="font-light tracking-[10px]">FRONTEND DEVELOPER</h2>
      </FadeInWrapper>

      <Spacing className="h-2" />

      <FadeInWrapper time={600} className="flex flex-col gap-3">
        <p className="font-light text-lg leading-10">
          3년의 사업 경험과 디자인 전공을 바탕으로 늘 UI/UX를 고민합니다.
          <br />
          기술적인 도전을 좋아하며, 성장하는 것 그 자체를 즐깁니다.
          <br />
          컴포넌트 설계, 디자인 시스템에 관심이 많으며 이를 통해 DX를 향상
          시키는 일을 좋아합니다.
        </p>
      </FadeInWrapper>

      <FadeInWrapper time={800} className="w-fit">
        <NextStep page={LINK.PROJECT} text="프로젝트 보러가기" />
      </FadeInWrapper>
    </PageLayout>
  );
};

export default AboutTemplate;

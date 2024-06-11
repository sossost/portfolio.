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
          디자인 전공 및 3년의 사업 경험을 바탕으로 늘 더 나은 UI/UX를
          고민합니다.
          <br />
          다양한 사이드 프로젝트, 오픈소스 기여 등을 통해 기술적인 도전,
          성장하는 것을 즐깁니다.
          <br />
          비효율적인 부분을 개선하는 것을 좋아합니다. 공통된 부분들을 패키지화한
          경험이 있습니다.
        </p>
      </FadeInWrapper>

      <FadeInWrapper time={800} className="w-fit">
        <NextStep page={LINK.PROJECT} text="프로젝트 보러가기" />
      </FadeInWrapper>
    </PageLayout>
  );
};

export default AboutTemplate;

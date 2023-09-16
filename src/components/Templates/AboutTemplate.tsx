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
          개발을 시작하고 인생 2막을 즐기고있는 신입 프론트엔드 개발자입니다.
          <br />
          노력하는 자는 즐기는 자를 이길수 없다고 합니다. 저는 개발이 너무
          재밌고, 재밌는 일에 모든걸 쏟아붙는 사람입니다.
          <br />
          디자인 전공과 3년의 사업 경험으로, 비즈니스와 사용자 경험을
          고민하는것에 익숙하며 좋아합니다.
          <br />
          좋은 코드에 대한 고민이 끊임 없으며, 그 고민을 바탕으로 개발자
          경험까지 고려하는 개발자가 되고 싶습니다.
        </p>
      </FadeInWrapper>

      <FadeInWrapper time={800} className="w-fit">
        <NextStep page={LINK.PROJECT} text="프로젝트 보러가기" />
      </FadeInWrapper>
    </PageLayout>
  );
};

export default AboutTemplate;

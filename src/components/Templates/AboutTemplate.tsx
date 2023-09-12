"use client";

import Anchor from "../Atoms/Anchor";
import FadeInWrapper from "../Atoms/FadeInWrapper";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";

const AboutTemplate = ({ content }: { content: string }) => {
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

      <Spacing className="h-2" />

      <FadeInWrapper time={800}>
        <Anchor href="/about">
          <p className="text-lg font-medium">Contact Me</p>
        </Anchor>
      </FadeInWrapper>
    </PageLayout>
  );
};

export default AboutTemplate;

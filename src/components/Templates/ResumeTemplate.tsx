import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { LINK } from "@/constants/link";

import NextStep from "../Organisms/NextStep";
import PageLayout from "../Atoms/PageLayout";
import Spacing from "../Atoms/Spacing";
import Title from "../Atoms/Title";

const ResumeTemplate = () => {
  useScrollToTop();

  return (
    <PageLayout>
      <Title>Resume.</Title>
      <Spacing className="h-4" />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
        <div className="py-8 md:py-12 bg-white rounded-2xl md:min-h-[1024px]">
          <Viewer fileUrl="/pdf/resume.pdf" />
        </div>
      </Worker>

      <NextStep page={LINK.CONTACT} text="저에게 관심이 생기셨나요?" />
    </PageLayout>
  );
};

export default ResumeTemplate;

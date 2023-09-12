import { getErrorMessage } from "@/utils/error";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

/** 클라이언트 단에서 Md 패치하여 HTML로 파싱하는 커스텀 훅 */
export const useMdToHtml = (fileName: string) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/posts/${fileName}.md`);
        const markdown = await response.text();
        const processedContent = await remark().use(html).process(markdown);

        setHtmlContent(processedContent.toString());
      } catch (error: unknown) {
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  return htmlContent;
};

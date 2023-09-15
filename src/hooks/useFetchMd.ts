import { getErrorMessage } from "@/utils/error";
import { useEffect, useState } from "react";

/** 클라이언트 단에서 Md 패치하여 HTML로 파싱하는 커스텀 훅 */
export const useFetchMd = (fileName: string | null) => {
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!fileName) return;
      try {
        const response = await fetch(`/posts/${fileName}.md`);
        const markdown = await response.text();
        setMdContent(markdown);
      } catch (error: unknown) {
        const errorMessage = getErrorMessage(error);
        console.log(errorMessage);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  return mdContent;
};

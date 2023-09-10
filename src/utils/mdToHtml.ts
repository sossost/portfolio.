import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function pasreMdToHtml(fileName: string) {
  const markdownPath = path.join("public/posts", `${fileName}.md`);
  const markdownContent = fs.readFileSync(markdownPath, "utf8");

  const processedContent = await remark().use(html).process(markdownContent);
  const content = processedContent.toString();

  return content;
}

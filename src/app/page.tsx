import MainTemplate from "@/components/Templates/MainTemplate";
import { pasreMdToHtml } from "@/utils/mdToHtml";

export default async function Home() {
  const mainContent = await pasreMdToHtml("main");

  return <MainTemplate content={mainContent} />;
}

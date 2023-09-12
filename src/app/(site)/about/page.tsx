import { pasreMdToHtml } from "@/utils/mdToHtml";

import AboutTemplate from "@/components/Templates/AboutTemplate";

const AboutPage = async () => {
  const aboutContent = await pasreMdToHtml("about");

  return <AboutTemplate content={aboutContent} />;
};

export default AboutPage;

export interface Project {
  id: string;
  name: string;
  period: string;
  thumbnail: string;
  image?: string;
  introduction: string;
  description: string;
  tags: string[];
  link?: string;
  website?: string;
  github: string;
  testId?: string;
}

export type Page = "main" | "about" | "projects" | "contact";

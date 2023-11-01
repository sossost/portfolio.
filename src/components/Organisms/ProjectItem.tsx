"use client";

import { useState } from "react";
import { Project } from "@/types";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useProjectModalStore } from "@/store/projectModalState";

import ProjectInfo from "../Molecules/ProjectInfo";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  const { handleProjectClick } = useProjectModalStore();

  const projectInfoStyle = isProjectHovered
    ? "transform translate-y-0 opacity-1"
    : "transform translate-y-2 opacity-0";

  return (
    <HoverControlWrapper className="relative">
      <div className="absolute inset-0 bg-dark/10 z-10 pointer-events-none" />
      <div
        className="relative flex flex-col gap-y-2 rounded-xl overflow-hidden w-full cursor-pointer mb-6 mx-auto max-w-[440px]"
        onMouseEnter={() => setIsProjectHovered(true)}
        onMouseLeave={() => setIsProjectHovered(false)}
        onClick={() => handleProjectClick(project)}
      >
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={440}
          height={440}
          placeholder="empty"
          className="bg-gray-200"
          priority
        />
        {isProjectHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/30" />
        )}
        <div
          className={twMerge(
            `absolute flex flex-col bottom-0 w-full p-8 gap-y-1 transition-all duration-300 ease-in-out oveflow-hidden`,
            projectInfoStyle
          )}
        >
          <ProjectInfo
            name={project.name}
            period={project.period}
            introduction={project.introduction}
            tags={project.tags}
          />
        </div>
      </div>
    </HoverControlWrapper>
  );
};

export default ProjectItem;

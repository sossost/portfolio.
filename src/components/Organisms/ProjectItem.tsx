"use client";

import { useState } from "react";
import { Project } from "@/types";
import { twMerge } from "tailwind-merge";

import ProjectInfo from "../Molecules/ProjectInfo";
import Image from "next/image";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

interface ProjectItemProps {
  project: Project;
  onClick: () => void;
}

const ProjectItem = ({ project, onClick }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const projectInfoStyle = isHovered
    ? "transform translate-y-0 opacity-1"
    : "transform translate-y-2 opacity-0";

  return (
    <HoverControlWrapper>
      <div
        className="relative flex flex-col gap-y-2 rounded-xl overflow-hidden w-full max-w-[440px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={490}
          height={1000}
        />
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-80" />
        )}
        <div
          className={twMerge(
            `absolute flex flex-col bottom-0 w-full p-8 gap-y-1 transition-all duration-300 ease-in-out oveflow-hidden`,
            projectInfoStyle
          )}
        >
          <ProjectInfo
            name={project.name}
            introduction={project.introduction}
            tags={project.tags}
          />
        </div>
      </div>
    </HoverControlWrapper>
  );
};

export default ProjectItem;

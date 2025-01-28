import { Project } from "@/.velite";
import Link from "next/link";
import React from "react";
import ImagePlaceholder from "./image-placeholder";
import BlurImage from "./blur-image";
import FadeIn from "./fade-in";
import { getIconFromString } from "@/lib/icon-helper";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    slug,
    title,
    date,
    published,
    category,
    stack,
    link,
    body,
    description,
    index,
    image,
    logo,
    roles,
    tags,
  } = project;

  return (
    <FadeIn>
      <div>
        <Link href={slug} className="grid gap-[10px]">
          <div className="w-full aspect-video relative m-0">
            {image ? (
              <BlurImage
                src={image}
                className="rounded-[6px] bg-secondary"
                style={{
                  objectFit: "cover",
                  margin: "0",
                }}
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
          <div className="grid items-start">
            {project.stack && (
              <div className="w-fit text-[14px] flex items-center justify-center gap-2 mt-[2px]">
                <div>{getIconFromString(project.stack[0])}</div>
                <span className="uppercase text-foregroundAlt font-semibold tracking-[1px]">
                  {project.stack[0]}
                </span>
              </div>
            )}
            <h3 className="text-[22px] font-bold">{title}</h3>
            <span className="text-muted-foreground font-normal">
              {description}
            </span>
          </div>
        </Link>
      </div>
    </FadeIn>
  );
};

export default ProjectCard;

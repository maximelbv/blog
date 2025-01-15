import { Project } from "@/.velite";
import Link from "next/link";
import React from "react";
import ImagePlaceholder from "./image-placeholder";
import BlurImage from "./blur-image";
import FadeIn from "./fade-in";

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
        <Link href={slug} className="grid gap-2">
          <div className="w-full aspect-video relative m-0">
            {image ? (
              <BlurImage
                src={image}
                className="rounded-[6px]"
                style={{
                  objectFit: "cover",
                  margin: "0",
                }}
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
          <div className="grid ">
            <h3 className="text-[34px] font-dahliaBold">{title}</h3>
            <span className="text-foregroundAlt font-normal">
              {description}
            </span>
          </div>
        </Link>
      </div>
    </FadeIn>
  );
};

export default ProjectCard;

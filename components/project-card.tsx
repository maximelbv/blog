import { Project } from "@/.velite";
import Link from "next/link";
import React from "react";
import ImagePlaceholder from "./image-placeholder";
import BlurImage from "./blur-image";
import PostInfos from "./post-infos";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    slug,
    title,
    date,
    published,
    category,
    body,
    description,
    index,
    image,
    logo,
    roles,
    tags,
  } = project;

  return (
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
          <h3 className="text-[30px]">{title}</h3>
          <span className="text-foregroundAlt font-normal">{description}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

"use client";

interface TableOfContentsProps {
  index: {
    link: string;
    name: string;
  }[];
}

export default function TableOfContents({ index }: TableOfContentsProps) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid sticky top-[120px] !overflow-y-auto h-fit max-h-[80svh]">
      <span className="uppercase font-bold tracking-wider">
        Table of content
      </span>
      {index.map((item) => (
        <a
          href={item.link}
          key={item.name}
          className="no-underline hover:underline text-foregroundAlt"
          onClick={handleSmoothScroll}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

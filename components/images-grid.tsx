import BlurImage from "./blur-image";

interface ImageGridProps {
  columns: number;
  images: ImageProps[];
}

interface ImageProps {
  src: string;
  alt: string;
}

const ImagesGrid = ({ columns, images }: ImageGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-4`}
    >
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-stretch">
          <div className="relative aspect-square">
            <BlurImage
              alt={image.alt}
              src={image.src}
              className="rounded-lg w-full h-full object-cover m-0"
            />
          </div>
          <p className="text-foregroundAlt !text-[15px] italic !mt-1">
            {image.alt}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;

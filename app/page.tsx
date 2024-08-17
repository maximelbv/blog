export default function Home() {
  return (
    <div>
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "calc(100svh - 80px)" }}
      >
        <div className="mb-[20svh] flex flex-col items-center">
          <h1 className="text-[80px] font-dahliaLight text-foreground mb-[-10px]">
            <span className="font-dahliaBold mr-1">maxime</span>lefebvre
          </h1>
          <span className="font-dahlia text-[32px] text-foregroundAlt">
            design engineer
          </span>
        </div>
      </div>
      <div
        className="w-full flex flex-col justify-center items-center"
        style={{ height: "calc(100svh - 80px)" }}
      >
        <span className="font-dahlia text-[50px] text-foreground mb-20">
          Latest Posts
        </span>
        <div className="flex items-end">
          <div className="w-[210px] h-[210px] bg-secondary border-[1px] border-border rounded-[20px] -rotate-3 hover:rotate-0 mr-[-30px] transition-transform duration-500 ease-in-out"></div>
          <div className="relative group">
            <div
              className="absolute w-[350px] h-[350px] bg-secondary/70 rounded-[20px] rotate-[14deg] group-hover:rotate-0 transition-transform duration-500 ease-in-out"
              style={{ zIndex: 0 }}
            ></div>
            <div
              className="relative w-[350px] h-[350px] bg-secondary border-[1px] border-border rounded-[20px] rotate-6 hover:rotate-0 mb-16 transition-transform duration-500 ease-in-out"
              style={{ zIndex: 1 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import AnimatedButon from "@/components/animated-buton";
import AnimatedText from "@/components/animated-text";
import PopAnimWraper from "@/components/pop-anim-wraper";

export default function Home() {
  return (
    <div
      className="default-layout p-5 flex flex-col justify-center gap-2"
      style={{ height: "calc(100svh - 224px)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex !m-0">
          <AnimatedText
            text="maxime"
            className="text-[50px] sm:text-[70px] font-dahliaBold text-foreground !m-0 !mr-[-0.25em]"
          />
          <AnimatedText
            text="lefebvre"
            className="text-[50px] sm:text-[70px] font-dahliaLight text-foreground !m-0 "
          />
        </h1>

        <AnimatedText
          text="web developer · motion designer · 3d artist"
          delay={0.5}
          className="text-foregroundAlt uppercase text-[16px]"
        />
      </div>

      <PopAnimWraper
        delay={0.8}
        className="flex gap-2 items-center justify-center"
      >
        <AnimatedButon
          className="mt-4 bg-gradient-to-tr from-pigment-blue to-pigment-blueLighter rounded-full hover:bg-gradient-to-tr hover:from-blue hover:to-pigment-blueLighter text-[#fff] hover:text-[#fff]"
          nav={{ route: "/blog", name: "Blog" }}
        />
        <AnimatedButon
          className="mt-4 rounded-full"
          nav={{ route: "/projects", name: "Projects" }}
        />
      </PopAnimWraper>
    </div>
  );
}

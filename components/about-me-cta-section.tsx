import AnimatedButon from "./animated-buton";
import FadeIn from "./fade-in";
import AboutIllustration from "./stack-illustration";

const AboutMeCTASection = () => {
  return (
    <div className="flex items-center justify-center px-[20px] h-fit my-[50px]">
      <FadeIn
        duration={0.75}
        delay={0.3}
        className="p-[20px] absolute left-0 right-0 ms-auto me-auto w-fit max-w-[450px] flex flex-col items-center justify-center text-center gap-[15px]"
      >
        <span className="text-[40px] font-dahliaBold">About me</span>
        <span className="text-foregroundAlt">
          I'm a 26 years-old creative developer from France, i love to build
          usefull and well-made things. Learn more about me, my background,
          skills, tools I work with, and the journey that brought me here
        </span>
        <AnimatedButon
          nav={{ route: "/about", name: "Learn more" }}
          className="bg-gradient-to-tr from-pigment-blue to-pigment-blueLighter rounded-full hover:bg-gradient-to-tr hover:from-blue hover:to-pigment-blueLighter text-[#fff] hover:text-[#fff]"
        />
      </FadeIn>

      <FadeIn duration={0.75}>
        <AboutIllustration />
      </FadeIn>
    </div>
  );
};

export default AboutMeCTASection;

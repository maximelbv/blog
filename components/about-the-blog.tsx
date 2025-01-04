import AnimatedButon from "./animated-buton";
import FadeIn from "./fade-in";
import AboutIllustration from "./stack-illustration";

const AboutTheBlog = () => {
  return (
    <div className="relative border-2 border-red-500 flex items-center justify-center px-[20px] h-fit">
      <FadeIn
        duration={0.75}
        delay={0.3}
        className="p-[20px] absolute left-0 right-0 ms-auto me-auto w-fit max-w-[450px] flex flex-col items-center justify-center text-center gap-[15px]"
      >
        <span className="text-[40px] font-dahliaBold">Blog</span>
        <span className="text-foregroundAlt">
          On my blog i share quick-read snippets and interactive articles about
          <strong> coding, 3D and motion design</strong>. Don't hesitate to take
          a look around and let me know if you've learned anything from this
          blog !
        </span>
        <AnimatedButon
          nav={{ route: "/blog", name: "Go to the blog" }}
          className="bg-gradient-to-tr from-pigment-blue to-pigment-blueLighter rounded-full hover:bg-gradient-to-tr hover:from-blue hover:to-pigment-blueLighter text-[#fff] hover:text-[#fff]"
        />
      </FadeIn>

      <FadeIn duration={0.75}>
        <AboutIllustration />
      </FadeIn>
    </div>
  );
};

export default AboutTheBlog;

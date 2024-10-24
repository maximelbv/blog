import AnimatedText from "./animated-text";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <AnimatedText
        text={title}
        className="font-dahliaBold text-[60px] text-foreground !m-0"
      />
      <AnimatedText
        delay={0.5}
        text={subtitle}
        className="inline-block text-foregroundAlt font-medium max-w-[400px] mt-[-5px]"
      />
    </div>
  );
};

export default PageHeader;

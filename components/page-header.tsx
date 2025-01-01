import AnimatedText from "./animated-text";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={`${className}`}>
      <AnimatedText
        text={title}
        className="font-dahliaBold text-[60px] text-foreground !m-0"
      />
      {subtitle && (
        <AnimatedText
          delay={0.5}
          text={subtitle}
          className="inline-block text-foregroundAlt font-medium max-w-[400px] mt-[-5px]"
        />
      )}
    </div>
  );
};

export default PageHeader;

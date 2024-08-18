interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="mt-10">
      <h1 className="font-dahliaBold text-[60px] text-foreground !m-0">
        {title}
      </h1>
      <span className="inline-block text-foregroundAlt font-medium max-w-[400px]">
        {subtitle && subtitle}
      </span>
    </div>
  );
};

export default PageHeader;

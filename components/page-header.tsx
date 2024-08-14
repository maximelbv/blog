interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <h1 className="font-dahliaBold text-[60px] text-secondary-foreground !m-0">
        {title}
      </h1>
      <span className="inline-block text-secondary-foreground max-w-[400px]">
        {subtitle && subtitle}
      </span>
    </div>
  );
};

export default PageHeader;

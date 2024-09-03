interface StepTypes {
  number: number;
  title: string;
  children: any;
}

const Step = ({ number, title, children }: StepTypes) => {
  return (
    <div className="my-6 relative">
      <div className="h-full w-[1px] bg-border absolute top-8 left-3"></div>
      <div className="flex gap-2 items-center mb-5">
        <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-secondary border-[1px] border-border">
          <span className="font-black text-secondary-foreground">{number}</span>
        </div>
        <span className="text-[16px] font-bold text-secondary-foreground">
          {title}
        </span>
      </div>
      <div className="ml-9 py-1">{children}</div>
    </div>
  );
};

export default Step;

interface StepTypes {
  number: number;
  title: string;
  children: any;
}

const Step = ({ number, title, children }: StepTypes) => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-muted">
          <span className="font-black text-foreground">{number}</span>
        </div>
        <span className="text-[18px] font-bold text-foreground">{title}</span>
      </div>
      <div className="ml-10">{children}</div>
    </div>
  );
};

export default Step;

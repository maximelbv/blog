import { Icons } from "./icons";

const TechnicalPortrait = () => {
  return (
    <div className="default-layout px-[20px] grid grid-cols-1 md:grid-cols-3 gap-[15px] mt-[50px]">
      <div className="aspect-square grid grid-cols-2 gap-[15px]">
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center text-center gap-[15px]">
          <Icons.location />
          <span className="text-muted-foreground text-[18px] text-center">
            Toulouse, FR
          </span>
        </div>
        <div className="bg-secondary aspect-square rounded-lg"></div>
        <div className="bg-secondary aspect-square rounded-lg"></div>
        <div className="bg-secondary aspect-square rounded-lg"></div>
      </div>
      <div className="bg-secondary aspect-square rounded-lg"></div>
      <div className="bg-secondary aspect-square rounded-lg"></div>
    </div>
  );
};

export default TechnicalPortrait;

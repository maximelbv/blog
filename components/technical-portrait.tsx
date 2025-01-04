import AnimatedButon from "./animated-buton";
import { Icons } from "./icons";

const TechnicalPortrait = () => {
  return (
    <div className="border-2 border-green-500 default-layout px-[20px]">
      <AnimatedButon
        icon={<Icons.paperClip />}
        nav={{ name: "Resume", route: "/" }}
        className="bg-foreground hover:bg-foreground text-background hover:text-background rounded-full"
      />
    </div>
  );
};

export default TechnicalPortrait;

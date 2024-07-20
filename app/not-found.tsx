import AnimatedButon from "@/components/animated-buton";

export default function NotFound() {
  const nav = { route: "/blog", name: "Return Home" };
  return (
    <div className="w-full h-[50svh] md:h-[70svh] flex flex-col items-center justify-center">
      <h1 className="text-[80px] font-bold font-dahliaBold">404</h1>
      <h2 className="mb-3">The page was not found :(</h2>
      <AnimatedButon nav={nav} />
    </div>
  );
}

import { Icons } from "@/components/icons";

const icons = {
  html: Icons.html,
  javascript: Icons.javascript,
  typescript: Icons.typescript,
  threejs: Icons.threejs,
  git: Icons.git,
  nestjs: Icons.nestjs,
  nextjs: Icons.nextjs,
  docker: Icons.docker,
  python: Icons.python,
  blender: Icons.blender,
  nodejs: Icons.nodejs,
  unreal: Icons.unreal,
  tools: Icons.tools,
  computerGraphics: Icons.computerGraphics,
  figma: Icons.figma,
  react: Icons.react,
  website: Icons.website,
  tailwind: Icons.tailwind,
  framerMotion: Icons.framerMotion,
  webflow: Icons.webflow,
};

type Icon = keyof typeof icons;

function isIconAvailable(iconString: string): iconString is Icon {
  return iconString in icons;
}

export function getIconFromString(string: string) {
  const formattedString = string
    .toLowerCase()
    .replace(/ (\w)/g, (_, c) => c.toUpperCase());

  const JsxIcon = isIconAvailable(formattedString)
    ? icons[formattedString]
    : null;

  return JsxIcon ? <JsxIcon /> : null;
}

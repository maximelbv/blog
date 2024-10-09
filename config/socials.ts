import { Icons } from "@/components/icons";

export const socials = [
  {
    name: "Github",
    route: "https://github.com/maximelbv",
    icon: Icons.github,
  },
  {
    name: "Linkedin",
    route: "https://www.linkedin.com/in/maxime-lefebvre-85b545199/",
    icon: Icons.linkedin,
  },
  // {
  //   name: "Instagram",
  //   route: "https://www.instagram.com/maximelbv/",
  //   icon: Icons.instagram,
  // },
  {
    name: "Twitter",
    route: "https://x.com/maximelbv",
    icon: Icons.x,
  },
  {
    name: "Email",
    route: "mailto:contact@maximelbv.com",
    icon: Icons.email,
  },
];

export type Socials = typeof socials;

export const navigation = [
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Blog",
    route: "/blog",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Motion Lab ↗",
    route: "https://labs.maximelbv.com",
    isExternal: true,
  },
  {
    name: "Contact",
    route: "mailto:contact@maximelbv.com",
    filled: true,
  },
];

export type Navigation = typeof navigation;

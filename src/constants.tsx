import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/home",
    color: "#23423",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Miscellaneous",
    path: "/miscellaneous",
    color: "#23423",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Privacy Policy",
        color: "#2322",
        path: "/miscellaneous/privacy",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    color: "#23423",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

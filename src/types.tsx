export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  color:string;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

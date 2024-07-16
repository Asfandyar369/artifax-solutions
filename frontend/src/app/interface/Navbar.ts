export interface Logo {
  id: number;
  url: string;
  navbarMenus?: Navbar[];
}
export interface Navbar {
  id: number;
  name: string;
  link: string;
  nestedMenus?:NestedMenu[]
}
export interface NestedMenu {
  id: number;
  name: string;
  link: string;
}

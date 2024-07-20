export interface Footer {
  id: number | null | undefined;
  logoUrl: string | undefined | null;
  logoAltText: string | undefined | null;
  aboutText: string | undefined | null;
  copyrightText: string | undefined | null;
  copyrightLink: string | undefined | null;
  ourPaymentMethods: string | undefined | null;
  paymentMethodsImg: string | undefined | null;
  buttonText: string | undefined | null;
  buttonLink: string | undefined | null;
  headingList: MenuHeading[] | undefined | null;
}
export interface MenuHeading {
  heading: string | undefined | null;
  menuList: MenuList[] | undefined | null;
  menuButtonList: ButtonList[] | undefined | null;
  menuIconList: MenuIcon[] | undefined | null;
}
export interface MenuList {
  id: number | undefined | null;
  menuName: string | undefined | null;
  linkUrl: string | undefined | null;
}
export interface MenuIcon {
  id: number | undefined | null;
  icon: string | undefined | null;
  iconClass: string | undefined | null;
  iconUrl: string | undefined | null;
}
export interface ButtonList {
  id: number | null | undefined;
  buttonText: string | null | undefined;
  buttonLink: string | null | undefined;
}

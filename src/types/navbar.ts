export interface MegaMenuLink {
  name: string;
  href: string;
}

export interface MegaMenuSection {
  heading: string;
  links: MegaMenuLink[];
}

export interface NavLink {
  name: string;
  href: string;
  isDropdown?: boolean;
  megaMenu?: MegaMenuSection[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  type: "work" | "play";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

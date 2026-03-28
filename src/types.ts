import { LucideIcon } from "lucide-react";

export interface Proposal {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

export interface Material {
  id: string;
  title: string;
  type: string;
  size: string;
  icon: LucideIcon;
}

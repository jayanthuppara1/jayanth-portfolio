export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  // Projects will be added on Day 3
];

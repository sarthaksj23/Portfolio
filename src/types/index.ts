import type { LucideIcon } from 'lucide-react';

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  resume?: string;
  email?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectFile {
  name: string;
  type: string;
  description?: string;
  url?: string;
}

export interface DashboardEmbed {
  type: 'powerbi' | 'tableau' | 'external' | 'screenshot';
  embedUrl?: string;
  externalUrl?: string;
  screenshotUrl?: string;
  caption?: string;
}

export interface CodeSnippet {
  language: 'sql' | 'python' | 'r' | 'bash' | 'text';
  label?: string;
  code: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  tools: string[];
  category: string;
  featured?: boolean;

  overview?: string;
  businessProblem?: string;
  objectives?: string[];
  dataset?: string;
  dataCleaning?: string;
  methodology?: string;
  code?: CodeSnippet[];
  dashboards?: DashboardEmbed[];
  keyFindings?: string[];
  recommendations?: string[];
  files?: ProjectFile[];
  githubUrl?: string;
  references?: string[];
  limitations?: string[];
  isSample?: boolean;
}

export interface Profile {
  name: string;
  headline: string;
  intro: string;
  social: SocialLinks;
  skillGroups: SkillGroup[];
}

export type IconName = keyof typeof import('lucide-react');

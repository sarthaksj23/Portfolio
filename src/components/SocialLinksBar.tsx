import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import type { SocialLinks } from '@/types';

export function SocialLinksBar({ social, size = 'default' }: { social: SocialLinks; size?: 'default' | 'large' }) {
  const links: { href: string; icon: typeof Github; label: string; external: boolean }[] = [];
  if (social.github) links.push({ href: social.github, icon: Github, label: 'GitHub', external: true });
  if (social.linkedin) links.push({ href: social.linkedin, icon: Linkedin, label: 'LinkedIn', external: true });
  if (social.resume) links.push({ href: social.resume, icon: FileText, label: 'Resume', external: true });
  if (social.email) links.push({ href: `mailto:${social.email}`, icon: Mail, label: 'Email', external: false });

  if (links.length === 0) return null;

  const sizeClasses =
    size === 'large'
      ? 'px-5 py-2.5 text-sm gap-2'
      : 'px-4 py-2 text-sm gap-1.5';

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className={`inline-flex items-center ${sizeClasses} rounded-lg border border-gray-200 font-semibold text-gray-700 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary-700 dark:hover:bg-primary-900/30 dark:hover:text-primary-300`}
        >
          <link.icon className={size === 'large' ? 'h-5 w-5' : 'h-4 w-4'} />
          {link.label}
        </a>
      ))}
    </div>
  );
}

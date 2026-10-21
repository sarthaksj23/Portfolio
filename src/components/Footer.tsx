import { BarChart3, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { profile } from '@/data/profile';

interface FooterProps {
  navigate: (to: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <BarChart3 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            <span className="font-semibold">{profile.name}</span>
          </div>

          <nav className="flex gap-6 text-sm">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              Projects
            </button>
          </nav>

          <div className="flex items-center gap-3">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {profile.social.resume && (
              <a
                href={profile.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="Resume"
              >
                <FileText className="h-5 w-5" />
              </a>
            )}
            {profile.social.email && (
              <a
                href={`mailto:${profile.social.email}`}
                className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

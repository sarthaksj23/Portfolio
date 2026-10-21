import { useState } from 'react';
import { Menu, X, Moon, Sun, BarChart3 } from 'lucide-react';
import { profile } from '@/data/profile';

interface NavbarProps {
  currentPath: string;
  navigate: (to: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ currentPath, navigate, theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  const handleNav = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2 text-lg font-bold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
        >
          <BarChart3 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">Portfolio</span>
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-600 dark:text-gray-300"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-200 px-4 py-2 sm:hidden dark:border-gray-800">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

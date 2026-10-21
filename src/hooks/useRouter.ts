import { useEffect, useState, useCallback } from 'react';

// Hash-based router for static hosting (GitHub Pages, Cloudflare Pages).
// Routes look like: /#/projects/netflix-analysis
// This avoids server-side routing requirements entirely.

function parseHash(): { page: string; slug?: string } {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const path = hash.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '') return { page: 'home' };
  if (path === '/projects') return { page: 'projects' };
  const projectMatch = path.match(/^\/projects\/(.+)$/);
  if (projectMatch) return { page: 'project', slug: decodeURIComponent(projectMatch[1]) };
  return { page: 'notfound' };
}

export function useRouter() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((to: string) => {
    const target = to.startsWith('/') ? to : '/' + to;
    if (window.location.hash === '#' + target) return;
    window.location.hash = target;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return { route, navigate };
}

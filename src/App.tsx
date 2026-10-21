import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useRouter } from '@/hooks/useRouter';
import { useTheme } from '@/hooks/useTheme';
import { projects } from '@/data/projects';

function App() {
  const { route, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();

  // Update document title based on route
  useEffect(() => {
    const base = 'Data Analyst Portfolio';
    if (route.page === 'home') document.title = base;
    else if (route.page === 'projects') document.title = `Projects | ${base}`;
    else if (route.page === 'project' && route.slug) {
      const project = projects.find((p) => p.slug === route.slug);
      document.title = project ? `${project.title} | ${base}` : `${base}`;
    } else document.title = `Not Found | ${base}`;
  }, [route]);

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'projects':
        return <ProjectsPage navigate={navigate} />;
      case 'project': {
        const project = projects.find((p) => p.slug === route.slug);
        if (!project) return <NotFoundPage navigate={navigate} />;
        return <ProjectDetailPage project={project} allProjects={projects} navigate={navigate} />;
      }
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  const currentPath =
    route.page === 'home'
      ? '/'
      : route.page === 'projects'
        ? '/projects'
        : route.page === 'project' && route.slug
          ? `/projects/${route.slug}`
          : '/notfound';

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar currentPath={currentPath} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;

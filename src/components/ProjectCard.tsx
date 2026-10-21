import { ArrowRight, Star } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  navigate: (to: string) => void;
}

export function ProjectCard({ project, navigate }: ProjectCardProps) {
  const handleClick = () => navigate(`/projects/${project.slug}`);

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur dark:bg-gray-900/90 dark:text-gray-200">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <Star className="h-3 w-3 fill-current" /> Featured
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors group-hover:gap-2 dark:text-primary-400">
          Explore Project
          <ArrowRight className="h-4 w-4 transition-transform" />
        </div>
      </div>
    </article>
  );
}

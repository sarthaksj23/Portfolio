import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

interface ProjectsPageProps {
  navigate: (to: string) => void;
}

export function ProjectsPage({ navigate }: ProjectsPageProps) {
  const [search, setSearch] = useState('');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allTools = useMemo(() => {
    const tools = new Set<string>();
    projects.forEach((p) => p.tools.forEach((t) => tools.add(t)));
    return Array.from(tools).sort();
  }, []);

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    projects.forEach((p) => cats.add(p.category));
    return Array.from(cats).sort();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesTool = !activeTool || p.tools.includes(activeTool);
      const matchesCategory = !activeCategory || p.category === activeCategory;
      return matchesSearch && matchesTool && matchesCategory;
    });
  }, [search, activeTool, activeCategory]);

  const hasFilters = activeTool || activeCategory || search;

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-primary-50/30 to-white dark:border-gray-800 dark:from-primary-900/10 dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">Projects</h1>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
            A collection of my data analysis projects. Use the filters to explore by tool or category.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by title or description..."
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:border-primary-600 dark:focus:ring-primary-900/30"
          />
        </div>

        {/* Category filters */}
        {allCategories.length > 0 && (
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Category
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="All"
                active={!activeCategory}
                onClick={() => setActiveCategory(null)}
              />
              {allCategories.map((cat) => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tool filters */}
        {allTools.length > 0 && (
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Technology
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="All"
                active={!activeTool}
                onClick={() => setActiveTool(null)}
              />
              {allTools.map((tool) => (
                <FilterChip
                  key={tool}
                  label={tool}
                  active={activeTool === tool}
                  onClick={() => setActiveTool(activeTool === tool ? null : tool)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {filtered.length > 0 ? (
          <>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Showing {filtered.length} of {projects.length} projects
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} navigate={navigate} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center dark:border-gray-700">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">No projects found</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or filters.
            </p>
            {hasFilters && (
              <button
                onClick={() => {
                  setSearch('');
                  setActiveTool(null);
                  setActiveCategory(null);
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
        active
          ? 'bg-primary-600 text-white shadow-sm'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

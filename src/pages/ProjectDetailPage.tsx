import {
  ArrowLeft,
  ArrowRight,
  Github,
  Target,
  AlertCircle,
  ListChecks,
  Database,
  Sparkles,
  Wrench,
  Filter,
  Microscope,
  Code2,
  LayoutDashboard,
  TrendingUp,
  Lightbulb,
  FolderOpen,
  BookOpen,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';
import type { Project } from '@/types';
import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';
import { DashboardEmbed } from '@/components/DashboardEmbed';
import { FileList } from '@/components/FileList';

interface ProjectDetailPageProps {
  project: Project;
  allProjects: Project[];
  navigate: (to: string) => void;
}

export function ProjectDetailPage({ project, allProjects, navigate }: ProjectDetailPageProps) {
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const hasCode = project.code && project.code.length > 0;
  const hasDashboards = project.dashboards && project.dashboards.length > 0;
  const hasFiles = project.files && project.files.filter((f) => f.url).length > 0;

  return (
    <div className="animate-fade-in">
      {/* Hero header */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:border-gray-800 dark:from-gray-900/50 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <button
            onClick={() => navigate('/projects')}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </button>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
              {project.category}
            </span>
            {project.isSample && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                Sample Project
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
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

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary-700 dark:hover:bg-primary-900/30 dark:hover:text-primary-300"
            >
              <Github className="h-4 w-4" /> View on GitHub
            </a>
          )}
        </div>
      </section>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content sections */}
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6">
        {project.overview && (
          <Section title="Project Overview" icon={<Target className="h-5 w-5" />}>
            <p className="leading-relaxed">{project.overview}</p>
          </Section>
        )}

        {project.businessProblem && (
          <Section title="Business Problem" icon={<AlertCircle className="h-5 w-5" />}>
            <p className="leading-relaxed">{project.businessProblem}</p>
          </Section>
        )}

        {project.objectives && project.objectives.length > 0 && (
          <Section title="Objectives & Analytical Questions" icon={<ListChecks className="h-5 w-5" />}>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.dataset && (
          <Section title="Dataset & Data Source" icon={<Database className="h-5 w-5" />}>
            <p className="leading-relaxed">{project.dataset}</p>
          </Section>
        )}

        {project.tools && project.tools.length > 0 && (
          <Section title="Tools & Technologies" icon={<Wrench className="h-5 w-5" />}>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Section>
        )}

        {project.dataCleaning && (
          <Section title="Data Cleaning & Transformation" icon={<Filter className="h-5 w-5" />}>
            <p className="leading-relaxed whitespace-pre-line">{project.dataCleaning}</p>
          </Section>
        )}

        {project.methodology && (
          <Section title="Analytical Methodology" icon={<Microscope className="h-5 w-5" />}>
            <p className="leading-relaxed whitespace-pre-line">{project.methodology}</p>
          </Section>
        )}

        {hasCode && (
          <Section title="Code & Technical Work" icon={<Code2 className="h-5 w-5" />}>
            <div className="space-y-4">
              {project.code!.map((snippet, i) => (
                <CodeBlock key={i} snippet={snippet} />
              ))}
            </div>
          </Section>
        )}

        {hasDashboards && (
          <Section title="Dashboard & Visualizations" icon={<LayoutDashboard className="h-5 w-5" />}>
            <div className="space-y-6">
              {project.dashboards!.map((dashboard, i) => (
                <DashboardEmbed key={i} dashboard={dashboard} />
              ))}
            </div>
          </Section>
        )}

        {project.keyFindings && project.keyFindings.length > 0 && (
          <Section title="Key Findings" icon={<TrendingUp className="h-5 w-5" />}>
            <ul className="space-y-3">
              {project.keyFindings.map((finding, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
                  <span className="leading-relaxed">{finding}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.recommendations && project.recommendations.length > 0 && (
          <Section title="Business Recommendations" icon={<Lightbulb className="h-5 w-5" />}>
            <ul className="space-y-3">
              {project.recommendations.map((rec, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-primary-100 bg-primary-50/50 p-4 dark:border-primary-900/50 dark:bg-primary-900/10"
                >
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
                  <span className="leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {hasFiles && (
          <Section title="Project Files & Documentation" icon={<FolderOpen className="h-5 w-5" />}>
            <FileList files={project.files!} />
          </Section>
        )}

        {project.githubUrl && (
          <Section title="GitHub Repository" icon={<Github className="h-5 w-5" />}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Github className="h-4 w-4" /> View Repository
            </a>
          </Section>
        )}

        {project.references && project.references.length > 0 && (
          <Section title="References" icon={<BookOpen className="h-5 w-5" />}>
            <ul className="space-y-2">
              {project.references.map((ref, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 text-primary-600 dark:text-primary-400">[{i + 1}]</span>
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.limitations && project.limitations.length > 0 && (
          <Section title="Limitations" icon={<AlertTriangle className="h-5 w-5" />}>
            <ul className="space-y-2">
              {project.limitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {/* Prev/Next navigation */}
      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prevProject ? (
              <button
                onClick={() => navigate(`/projects/${prevProject.slug}`)}
                className="group flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-left transition-all hover:border-primary-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
              >
                <ArrowLeft className="h-5 w-5 shrink-0 text-gray-400 transition-colors group-hover:text-primary-600" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Previous</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{prevProject.title}</p>
                </div>
              </button>
            ) : (
              <div className="flex-1" />
            )}
            {nextProject ? (
              <button
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-gray-200 bg-white p-4 text-right transition-all hover:border-primary-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
              >
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Next</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{nextProject.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-colors group-hover:text-primary-600" />
              </button>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

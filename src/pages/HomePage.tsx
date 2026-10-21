import { ArrowRight, Code2, Database, BarChart3, Table2, FileSpreadsheet, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { SocialLinksBar } from '@/components/SocialLinksBar';

interface HomePageProps {
  navigate: (to: string) => void;
}

const skillIcons: Record<string, typeof Code2> = {
  'Languages & Querying': Code2,
  'Data Analysis & Visualization': BarChart3,
  'Tools & Workflow': Database,
};

export function HomePage({ navigate }: HomePageProps) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-primary-50/50 to-white dark:border-gray-800 dark:from-primary-900/10 dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              <Sparkles className="h-4 w-4" />
              {profile.headline}
            </span>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl dark:text-white">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {profile.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              {profile.social.resume && (
                <a
                  href={profile.social.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-primary-400 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary-600 dark:hover:text-primary-400"
                >
                  View Resume
                </a>
              )}
            </div>
            <div className="mt-4">
              <SocialLinksBar social={profile.social} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group) => {
            const Icon = skillIcons[group.category] || Table2;
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  A selection of my data analysis work.
                </p>
              </div>
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all hover:gap-2.5 dark:text-primary-400"
              >
                View All <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} navigate={navigate} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-accent-600 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Let's Connect</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-50">
            I'm actively seeking Data Analyst Intern and Junior Data Analyst opportunities. Feel free to reach out.
          </p>
          <div className="mt-6 flex justify-center">
            <SocialLinksBar social={profile.social} size="large" />
          </div>
        </div>
      </section>
    </div>
  );
}

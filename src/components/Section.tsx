import type { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  id?: string;
}

export function Section({ title, icon, children, id }: SectionProps) {
  return (
    <section id={id} className="animate-fade-in-up">
      {title && (
        <div className="mb-4 flex items-center gap-3">
          {icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              {icon}
            </div>
          )}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
      )}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

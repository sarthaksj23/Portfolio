import { ExternalLink, AlertTriangle, ImageIcon } from 'lucide-react';
import type { DashboardEmbed } from '@/types';

export function DashboardEmbed({ dashboard }: { dashboard: DashboardEmbed }) {
  if (dashboard.type === 'powerbi' && dashboard.embedUrl) {
    return (
      <div className="space-y-2">
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
          <iframe
            src={dashboard.embedUrl}
            title="Power BI Dashboard"
            className="h-[600px] w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <PrivacyNote />
      </div>
    );
  }

  if (dashboard.type === 'tableau' && dashboard.embedUrl) {
    return (
      <div className="space-y-2">
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
          <iframe
            src={dashboard.embedUrl}
            title="Tableau Dashboard"
            className="h-[600px] w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <PrivacyNote />
      </div>
    );
  }

  if (dashboard.type === 'external' && dashboard.externalUrl) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-800/50">
        <ExternalLink className="h-8 w-8 text-primary-600 dark:text-primary-400" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {dashboard.caption || 'An interactive dashboard is available at an external link.'}
        </p>
        <a
          href={dashboard.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          View Interactive Dashboard
          <ExternalLink className="h-4 w-4" />
        </a>
        <PrivacyNote />
      </div>
    );
  }

  if (dashboard.type === 'screenshot' && dashboard.screenshotUrl) {
    return (
      <figure className="space-y-2">
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
          <img
            src={dashboard.screenshotUrl}
            alt={dashboard.caption || 'Dashboard preview'}
            className="w-full object-contain"
            loading="lazy"
          />
        </div>
        {dashboard.caption && (
          <figcaption className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
            <ImageIcon className="mt-0.5 h-4 w-4 shrink-0" />
            {dashboard.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Fallback: no valid content
  return null;
}

function PrivacyNote() {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
      <span>
        Public dashboards may expose underlying data. Never publish sensitive or confidential data.
      </span>
    </div>
  );
}

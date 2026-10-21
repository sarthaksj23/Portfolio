import { Compass } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (to: string) => void;
}

export function NotFoundPage({ navigate }: NotFoundPageProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Compass className="h-16 w-16 text-primary-600 dark:text-primary-400" />
      <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="mt-2 max-w-md text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
      >
        Back to Home
      </button>
    </div>
  );
}

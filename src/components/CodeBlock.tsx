import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import type { CodeSnippet } from '@/types';

export function CodeBlock({ snippet }: { snippet: CodeSnippet }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2.5 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-primary-600 dark:text-primary-400">
            {snippet.language}
          </span>
          {snippet.label && (
            <span className="text-sm text-gray-600 dark:text-gray-400">{snippet.label}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-gray-900 p-4 text-sm leading-relaxed">
        <code className="font-mono text-gray-100">{snippet.code}</code>
      </pre>
    </div>
  );
}

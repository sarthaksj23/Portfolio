import { Download, ExternalLink, FileText, FileCode, FileSpreadsheet, File, FileImage } from 'lucide-react';
import type { ProjectFile } from '@/types';

function getFileIcon(type: string) {
  const t = type.toUpperCase();
  if (['SQL', 'PYTHON', 'PY', 'R', 'JS', 'IPYNB'].includes(t)) return FileCode;
  if (['EXCEL', 'XLS', 'XLSX', 'CSV'].includes(t)) return FileSpreadsheet;
  if (['IMAGE', 'IMG', 'PNG', 'JPG', 'JPEG', 'GIF', 'SVG'].includes(t)) return FileImage;
  if (['PDF', 'DOC', 'DOCX', 'TXT'].includes(t)) return FileText;
  return File;
}

function getActionLabel(url: string) {
  const lower = url.toLowerCase();
  if (lower.endsWith('.pdf') || lower.includes('view')) return 'View';
  return 'Download';
}

export function FileList({ files }: { files: ProjectFile[] }) {
  const validFiles = files.filter((f) => f.url && f.url.length > 0);

  if (validFiles.length === 0) return null;

  return (
    <ul className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
      {validFiles.map((file, idx) => {
        const Icon = getFileIcon(file.type);
        const actionLabel = getActionLabel(file.url || '');
        const isExternal = file.url?.startsWith('http');
        return (
          <li
            key={idx}
            className="flex items-center justify-between gap-4 bg-white p-4 transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/50"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                  {file.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">{file.type}</span>
                  {file.description && (
                    <>
                      <span>&middot;</span>
                      <span className="truncate">{file.description}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <a
              href={file.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-300"
            >
              {actionLabel}
              {isExternal ? <ExternalLink className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

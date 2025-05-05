'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">عذراً، حدث خطأ ما</h2>
        <p className="text-gray-600 mb-6">لم نتمكن من تحميل المقال. يرجى المحاولة مرة أخرى.</p>
        <button
          onClick={reset}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  );
}
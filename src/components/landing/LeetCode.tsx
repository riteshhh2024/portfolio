'use client';

import { leetcodeConfig } from '@/config/LeetCode';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type LeetCodeStats = {
  streak: number;
  totalActiveDays: number;
  ranking: number;
  solved: {
    easy: number;
    medium: number;
    hard: number;
    total: number;
  };
};

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export default function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/leetcode');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: LeetCodeStats = await res.json();
        setStats(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="border-border/50 border-b py-12 last:border-0">
      {/* Header */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.2em] uppercase">
            Competitive
          </p>
          <h2 className="text-foreground mt-1.5 text-xl font-bold tracking-tight">
            LeetCode
          </h2>
        </div>
        {!isLoading && !hasError && stats && (
          <Link
            href={leetcodeConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground pb-1 text-xs transition-colors"
          >
            View profile →
          </Link>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <div className="border-border border-t-foreground h-5 w-5 animate-spin rounded-full border-2" />
        </div>
      ) : hasError || !stats ? (
        <div className="border-border flex flex-col items-center gap-3 rounded-lg border border-dashed py-10 text-center">
          <LeetCodeIcon className="h-7 w-7 opacity-30" />
          <p className="text-muted-foreground text-sm">
            Unable to load LeetCode stats
          </p>
          <Link
            href={leetcodeConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition-colors"
          >
            <LeetCodeIcon className="h-3.5 w-3.5" />
            View on LeetCode
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {/* Streak */}
          <div className="border-border/50 bg-muted/20 flex flex-col gap-1.5 rounded-xl border p-4">
            <span className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
              Streak
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-foreground text-2xl font-bold tabular-nums">
                {stats.streak}
              </span>
              <span className="text-base">🔥</span>
            </div>
            <span className="text-muted-foreground text-[11px]">days</span>
          </div>

          {/* Problems solved */}
          <div className="border-border/50 bg-muted/20 flex flex-col gap-1.5 rounded-xl border p-4">
            <span className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
              Solved
            </span>
            <span className="text-foreground text-2xl font-bold tabular-nums">
              {stats.solved.total}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-medium text-green-500">
                E {stats.solved.easy}
              </span>
              <span className="text-muted-foreground text-[10px]">·</span>
              <span className="text-[10px] font-medium text-yellow-500">
                M {stats.solved.medium}
              </span>
              <span className="text-muted-foreground text-[10px]">·</span>
              <span className="text-[10px] font-medium text-red-500">
                H {stats.solved.hard}
              </span>
            </div>
          </div>

          {/* Active days */}
          <div className="border-border/50 bg-muted/20 flex flex-col gap-1.5 rounded-xl border p-4">
            <span className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
              Active Days
            </span>
            <span className="text-foreground text-2xl font-bold tabular-nums">
              {stats.totalActiveDays}
            </span>
            <span className="text-muted-foreground text-[11px]">this year</span>
          </div>

          {/* Ranking */}
          <div className="border-border/50 bg-muted/20 flex flex-col gap-1.5 rounded-xl border p-4">
            <span className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
              Ranking
            </span>
            <span className="text-foreground text-2xl font-bold tabular-nums">
              {stats.ranking > 0
                ? stats.ranking > 999999
                  ? (stats.ranking / 1000000).toFixed(1) + 'M'
                  : stats.ranking > 9999
                  ? Math.round(stats.ranking / 1000) + 'K'
                  : stats.ranking.toLocaleString()
                : '—'}
            </span>
            <span className="text-muted-foreground text-[11px]">global rank</span>
          </div>
        </div>
      )}
    </section>
  );
}

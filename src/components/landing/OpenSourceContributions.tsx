import {
  openSourceConfig,
  openSourceContributions,
  type ContributionStatus,
  type OpenSourceContribution,
} from '@/config/OpenSource';
import { Link } from 'next-view-transitions';
import React from 'react';

import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

const statusStyles: Record<ContributionStatus, { dot: string; label: string }> = {
  merged: { dot: 'bg-purple-500', label: 'Merged' },
  open:   { dot: 'bg-green-500 animate-pulse', label: 'Open' },
  closed: { dot: 'bg-red-400', label: 'Closed' },
};

const typeStyles: Record<OpenSourceContribution['type'], string> = {
  PR:         'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Issue:      'bg-orange-500/10 text-orange-500 border-orange-500/20',
  Discussion: 'bg-teal-500/10 text-teal-500 border-teal-500/20',
};

function ContributionCard({ contribution }: { contribution: OpenSourceContribution }) {
  const status = statusStyles[contribution.status];
  const typeStyle = typeStyles[contribution.type];

  return (
    <Link
      href={contribution.url}
      target="_blank"
      className="group border-border/50 bg-muted/20 hover:bg-muted/40 flex flex-col gap-2.5 rounded-lg border p-4 transition-colors"
    >
      {/* Repo name + external arrow */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <GithubIcon className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
          <span className="text-muted-foreground truncate text-xs font-medium">
            {contribution.repo}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="text-muted-foreground group-hover:text-foreground h-3.5 w-3.5 shrink-0 fill-current transition-colors"
        >
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
        </svg>
      </div>

      {/* PR / Issue title */}
      <p className="text-foreground line-clamp-2 text-sm font-semibold leading-snug">
        {contribution.title}
      </p>

      {/* What you did */}
      <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
        {contribution.description}
      </p>

      {/* Badges row */}
      <div className="mt-1 flex items-center gap-2 flex-wrap">
        <span className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold ${typeStyle}`}>
          {contribution.type}
        </span>
        <span className="flex items-center gap-1">
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          <span className="text-muted-foreground text-[10px]">{status.label}</span>
        </span>
        <span className="text-muted-foreground ml-auto text-[10px] tabular-nums">
          {contribution.date}
        </span>
      </div>
    </Link>
  );
}

export default function OpenSourceContributions() {
  if (openSourceContributions.length === 0) return null;

  return (
    <section className="border-border/50 border-b py-12 last:border-0">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-muted-foreground mb-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase">
            Community
          </p>
          <h2 className="text-foreground text-xl font-bold tracking-tight">
            Open Source
          </h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-muted-foreground hover:text-foreground -mr-2 mb-0.5"
        >
          <Link
            href={openSourceConfig.githubUrl}
            target="_blank"
            className="inline-flex items-center gap-1.5"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {openSourceContributions.map((contribution, i) => (
          <ContributionCard key={i} contribution={contribution} />
        ))}
      </div>
    </section>
  );
}

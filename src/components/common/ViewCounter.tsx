'use client';

import { Eye } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/views', { method: 'POST' })
      .then((r) => r.json())
      .then((data) => setViews(data.views))
      .catch(() => {});
  }, []);

  if (views === null) return null;

  return (
    <div
      className="text-muted-foreground flex items-center gap-1 text-xs tabular-nums"
      title={`${views.toLocaleString()} total visits`}
    >
      <Eye size={14} weight="fill" />
      <span>{views.toLocaleString()}</span>
    </div>
  );
}

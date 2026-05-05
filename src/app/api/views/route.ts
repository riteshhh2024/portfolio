import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const VIEWS_KEY = 'portfolio:views';

export async function GET() {
  try {
    const count = await redis.get<number>(VIEWS_KEY);
    return NextResponse.json({ views: count ?? 0 });
  } catch {
    return NextResponse.json({ views: 0 });
  }
}

export async function POST() {
  try {
    const count = await redis.incr(VIEWS_KEY);
    return NextResponse.json({ views: count });
  } catch {
    return NextResponse.json({ views: 0 });
  }
}

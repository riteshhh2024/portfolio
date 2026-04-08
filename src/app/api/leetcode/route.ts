import { leetcodeConfig } from '@/config/LeetCode';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const LEETCODE_GRAPHQL = 'https://leetcode.com/graphql/';

const query = `
  query userProfile($username: String!, $year: Int!) {
    matchedUser(username: $username) {
      profile {
        ranking
      }
      userCalendar(year: $year) {
        streak
        totalActiveDays
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const year = new Date().getFullYear();

    const response = await fetch(LEETCODE_GRAPHQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username: leetcodeConfig.username, year },
      }),
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'LeetCode API error' }, { status: 502 });
    }

    const json = await response.json();
    const user = json?.data?.matchedUser;

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const acStats: { difficulty: string; count: number }[] =
      user.submitStats?.acSubmissionNum ?? [];

    const solved = {
      easy: acStats.find((s) => s.difficulty === 'Easy')?.count ?? 0,
      medium: acStats.find((s) => s.difficulty === 'Medium')?.count ?? 0,
      hard: acStats.find((s) => s.difficulty === 'Hard')?.count ?? 0,
      total: acStats.find((s) => s.difficulty === 'All')?.count ?? 0,
    };

    return NextResponse.json({
      streak: user.userCalendar?.streak ?? 0,
      totalActiveDays: user.userCalendar?.totalActiveDays ?? 0,
      ranking: user.profile?.ranking ?? 0,
      solved,
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

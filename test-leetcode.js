const query = `
  query userProfile($username: String!, $year: Int!) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        streak
        totalActiveDays
        submissionCalendar
      }
    }
  }
`;

async function test() {
  // Check both current and previous year
  for (const year of [2026, 2025]) {
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username: 'PU5rldwXER', year },
      }),
    });

    const json = await response.json();
    console.log(`\n=== Year ${year} ===`);
    const cal = json?.data?.matchedUser?.userCalendar;
    console.log('streak:', cal?.streak);
    console.log('totalActiveDays:', cal?.totalActiveDays);
    console.log('submissionCalendar:', cal?.submissionCalendar);
  }
}

test();

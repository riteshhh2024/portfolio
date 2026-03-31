export type ContributionStatus = 'merged' | 'open' | 'closed';

export interface OpenSourceContribution {
  /** The repository e.g. "langchain-ai/langchain" */
  repo: string;
  /** Direct URL to the PR or Issue */
  url: string;
  /** Short title of the PR / Issue */
  title: string;
  /** One-line description of what you did / fixed / added */
  description: string;
  /** PR | Issue | Discussion */
  type: 'PR' | 'Issue' | 'Discussion';
  status: ContributionStatus;
  /** e.g. "Jan 2025" */
  date: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: 'langchain-ai/langchain',
    url: 'https://github.com/langchain-ai/langchain',
    title: 'Add your PR / contribution title here',
    description: 'Replace this with a real contribution — what you fixed, added, or reported.',
    type: 'PR',
    status: 'merged',
    date: 'Jan 2025',
  },
  // Add more contributions below — copy the block above and fill in the details
];

export const openSourceConfig = {
  /** Link to your GitHub profile for the "View profile" button */
  githubUrl: 'https://github.com/riteshhh2024',
};

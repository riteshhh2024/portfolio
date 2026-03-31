import Azure from '@/components/technologies/Azure';
import DotNet from '@/components/technologies/DotNet';
import LangChain from '@/components/technologies/LangChain';
import OpenAI from '@/components/technologies/OpenAI';
import Python from '@/components/technologies/Python';
import SqlServer from '@/components/technologies/SqlServer';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Optimus BT (OTBT Infotech Pvt. Ltd)',
    position: 'Software Developer',
    location: 'Bangalore, India',
    image: '/assets/logo.png',
    description: [
      'Architected a production-grade Applied AI SaaS platform (Kozmo) for contract intelligence using multi-cloud, service-oriented architecture',
      'Built a multi-agent LLM system (planner–executor pattern) using LangChain/LangGraph with ASP.NET orchestration and Python agents for extraction, validation, reasoning, and summarization',
      'Developed advanced RAG pipelines combining SQL-based structured data with vector search (FAISS/Chroma), improving response accuracy across large-scale contract datasets (10K+ records)',
      'Implemented LLM routing across multiple models (OpenAI, Claude, OSS) for task-specific optimization, reducing LLM cost/latency by ~35%',
      'Built event-driven data pipelines and real-time AI-powered analytics dashboard using Azure WebJobs, Table Storage, and Blob Storage',
      'Designed explainable AI pipelines with structured JSON outputs and time-series analytics (daily/weekly/monthly snapshots) for trend analysis and forecasting',
    ],
    startDate: 'Mar 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'OpenAI / LLMs',
        href: 'https://openai.com/',
        icon: <OpenAI />,
      },
      {
        name: 'LangChain',
        href: 'https://www.langchain.com/',
        icon: <LangChain />,
      },
      {
        name: 'ASP.NET',
        href: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
        icon: <DotNet />,
      },
      {
        name: 'Azure',
        href: 'https://azure.microsoft.com/',
        icon: <Azure />,
      },
      {
        name: 'SQL Server',
        href: 'https://www.microsoft.com/en-us/sql-server',
        icon: <SqlServer />,
      },
    ],
    website: 'https://www.optimusbt.com/',
  },
  {
    isCurrent: false,
    company: 'Sumathi Healthcare Pvt. Ltd',
    position: 'Software Developer',
    location: 'Bangalore, India',
    image: '/assets/logo.png',
    description: [
      'Developed scalable backend applications using ASP.NET MVC, focusing on robust service design and maintainability for Automation Lab Diagnostics (Vsoft)',
      'Built and optimized RESTful APIs to enable efficient data flow and integration across distributed systems',
      'Designed and improved data processing workflows, ensuring reliability and consistency in contract-related operations',
      'Diagnosed and resolved system bottlenecks including SQL query inefficiencies, improving performance and stability',
      'Applied advanced SQL optimization techniques (indexing, query tuning, normalization) to handle large-scale structured data efficiently',
    ],
    startDate: 'Sept 2023',
    endDate: 'Jan 2025',
    technologies: [
      {
        name: 'ASP.NET',
        href: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
        icon: <DotNet />,
      },
      {
        name: 'SQL Server',
        href: 'https://www.microsoft.com/en-us/sql-server',
        icon: <SqlServer />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
    ],
    website: 'https://sumathihealthcare.com/',
  },
];

import AWS from '@/components/technologies/AWS';
import Azure from '@/components/technologies/Azure';
import DotNet from '@/components/technologies/DotNet';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import OpenAI from '@/components/technologies/OpenAI';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
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
  {
    isCurrent: false,
    company: 'Traegen Systems Limited',
    position: 'Associate Engineer',
    location: 'Remote',
    image: '/assets/logo.png',
    description: [
      'Developed ASP.NET and SQL Server backend systems for ITMAS, processing millions of test records with secure and scalable data storage',
      'Built responsive JavaScript, HTML, and CSS interfaces that helped engineers filter, visualize, and interact with real-time test data',
      'Used Azure Databricks for data filtering, cleaning, and visualization, reducing test validation time by 40%',
      'Optimized SQL queries and database indexes, improving data retrieval performance by 20% and reducing response time',
      'Built Python REST APIs for an AI-powered image-to-text processing platform and integrated React.js frontend workflows with AWS S3 storage',
    ],
    startDate: 'Aug 2021',
    endDate: 'Sept 2023',
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
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'React.js',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Azure Databricks',
        href: 'https://azure.microsoft.com/en-us/products/databricks/',
        icon: <Azure />,
      },
      {
        name: 'AWS S3',
        href: 'https://aws.amazon.com/s3/',
        icon: <AWS />,
      },
    ],
    website: '',
  },
];

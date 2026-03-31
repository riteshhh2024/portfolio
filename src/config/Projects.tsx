import Azure from '@/components/technologies/Azure';
import DotNet from '@/components/technologies/DotNet';
import LangChain from '@/components/technologies/LangChain';
import OpenAI from '@/components/technologies/OpenAI';
import Python from '@/components/technologies/Python';
import SqlServer from '@/components/technologies/SqlServer';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Kozmo SaaS Platform v1.0',
    description:
      'Enterprise AI SaaS Platform - Production-grade contract intelligence platform using multi-agent LLM systems (planner–executor pattern) with LangChain/LangGraph, advanced RAG pipelines, and multi-model routing for enterprise-scale workflows',
    image: '/project/zaxis.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'OpenAI / LLMs', icon: <OpenAI key="openai" /> },
      { name: 'ASP.NET', icon: <DotNet key="dotnet" /> },
      { name: 'Azure', icon: <Azure key="azure" /> },
      { name: 'SQL Server', icon: <SqlServer key="sql" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/kozmo-saas',
    isWorking: true,
  },
  {
    title: 'Kozmo AI Dashboard',
    description:
      'Generative AI Analytics Dashboard - Real-time AI-powered analytics dashboard with event-driven data pipelines, LLM-powered KPI generation (OpenAI, LLaMA, Mistral), time-series analytics, and explainable AI pipelines with structured JSON outputs',
    image: '/project/LocalGovAI.webp',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'OpenAI / LLMs', icon: <OpenAI key="openai" /> },
      { name: 'Azure', icon: <Azure key="azure" /> },
      { name: 'SQL Server', icon: <SqlServer key="sql" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/kozmo-dashboard',
    isWorking: true,
  },
];

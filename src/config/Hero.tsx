import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Azure from '@/components/technologies/Azure';
import DotNet from '@/components/technologies/DotNet';
import LangChain from '@/components/technologies/LangChain';
import OpenAI from '@/components/technologies/OpenAI';
import Python from '@/components/technologies/Python';

// Component mapping for skills
export const skillComponents = {
  Python: Python,
  LangChain: LangChain,
  DotNet: DotNet,
  OpenAI: OpenAI,
  Azure: Azure,
};

export const heroConfig = {
  // Personal Information
  name: 'Ritesh Prajapati',
  title: 'Software Engineer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'LangChain',
      href: 'https://www.langchain.com/',
      component: 'LangChain',
    },
    {
      name: 'ASP.NET',
      href: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
      component: 'DotNet',
    },
  ],

  // Description Configuration — bold text extracted from resume
  description: {
    template:
      'I build production-grade AI systems and backend platforms using {skills:0}, {skills:1}, and {skills:2}. Specialized in <b>LLM-powered agentic systems</b>, <b>multi-agent orchestration</b>, <b>RAG pipelines</b>, and <b>tool-calling workflows</b> for enterprise workflows.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ritesh-prajapati-9bbb78348/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/riteshhh2024',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:riteshhh.p@gmail.com',
    icon: <Mail />,
  },
];

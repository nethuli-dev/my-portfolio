import lifelinkImg from '../assets/projects/lifelink.jpeg'
import sahaayaImg from '../assets/projects/sahaaya.jpeg'
import pacmanImg from '../assets/projects/pac-man.gif'
import semesterRiskImg from '../assets/projects/semesterrisk.png'
import genaiImg from '../assets/projects/genai-code-reviewer.jpeg'
import movierentalImg from '../assets/projects/movierental.jpeg'
import greenhouseImg from '../assets/projects/greenhouse.jpeg'

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  symbol: string
  image?: string
  videoUrl?: string
  githubUrl: string
  liveUrl?: string
}

export const projectsData: Project[] = [
  {
    id: 'lifelink',
    number: '01',
    title: 'LifeLink',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'A full-stack platform focused on donor registration and eligibility management, with intelligent workflows and integrated application features.',
    technologies: ['React', 'ASP.NET Core', 'PostgreSQL', 'Python'],
    symbol: '✳',
    image: lifelinkImg,
    githubUrl: 'https://github.com/nethuli-dev/lifelink.git',
    liveUrl: 'https://lifelink.72-62-255-113.sslip.io',
  },
  {
    id: 'sahaaya',
    number: '02',
    title: 'Sahaaya',
    category: 'SOFTWARE DEVELOPMENT',
    description:
      'A software development project demonstrating the process of transforming an idea into a functional digital solution.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    symbol: '◇',
    image: sahaayaImg,
    githubUrl: 'https://github.com/nethuli-dev/sahaaya.git',
    liveUrl: 'https://sahaaya-sooty.vercel.app',
  },
  {
    id: 'pacman-ai',
    number: '03',
    title: 'Pacman IA Assignment',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'An AI assignment exploring intelligent search and problem-solving strategies, including state representation, search algorithms, and heuristic-based decision-making.',
    technologies: ['Python', 'AI Search', 'Heuristics'],
    symbol: '◉',
    image: pacmanImg,
    githubUrl: 'https://github.com/nethuli-dev/IA_Assignment.git',
  },
  {
    id: 'agentic-rag',
    number: '04',
    title: 'Agentic RAG System',
    category: 'AI ENGINEERING',
    description:
      'An exploration of retrieval-augmented generation and agent-based workflows for building more capable AI applications.',
    technologies: ['Python', 'RAG', 'LLMs', 'AI Agents'],
    symbol: '◈',
    githubUrl: 'https://github.com/nethuli-dev/agentic-rag-assistant.git',
  },
  {
    id: 'semester-risk-analyzer',
    number: '05',
    title: 'Semester Risk Analyzer',
    category: 'DATA ANALYTICS / MACHINE LEARNING',
    description:
      'A semester risk analysis project designed to help identify potential academic performance risks through student-related data analysis and risk assessment.',
    technologies: ['Python', 'Data Analysis', 'Machine Learning'],
    symbol: '◉',
    image: semesterRiskImg,
    githubUrl: 'https://github.com/nethuli-dev/Semester-Risk-Analyzer-.git',
  },
  {
    id: 'genai-reviewer',
    number: '06',
    title: 'GenAI Code Reviewer',
    category: 'GENERATIVE AI',
    description:
      'An AI-powered code review project exploring intelligent code analysis, automated feedback, and developer assistance.',
    technologies: ['Python', 'Generative AI', 'LLMs'],
    symbol: '</>',
    image: genaiImg,
    githubUrl: 'https://github.com/nethuli-dev/genai-code-reviewer.git',
  },
  {
    id: 'movie-rental',
    number: '07',
    title: 'Movie Rental System',
    category: 'SOFTWARE ENGINEERING',
    description:
      'A movie rental application project focused on developing a software solution for managing movie-related rental operations.',
    technologies: ['C#', 'SQL Server', '.NET Framework'],
    symbol: '▣',
    image: movierentalImg,
    githubUrl: 'https://github.com/nethuli-dev/movie-rental-platform.git',
  },
  {
    id: 'greenhouse',
    number: '08',
    title: 'Greenhouse Project',
    category: 'TECHNOLOGY PROJECT',
    description:
      'A smart greenhouse management system exploring technology-based automation and sensor solutions in a greenhouse environment.',
    technologies: ['IoT', 'Embedded Systems', 'Sensors', 'Automation'],
    symbol: '✿',
    image: greenhouseImg,
    githubUrl: 'https://github.com/nethuli-dev/Smart-Greenhouse-System.git',
  },
]

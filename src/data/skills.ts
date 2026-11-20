import type { ComponentType } from 'react'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiDart,
  SiHtml5,
  SiCss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiMediapipe,
  SiJupyter,
  SiGooglecolab,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiPrisma,
  SiMongoose,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDocker,
  SiVercel,
  SiRender,
  SiGithubpages,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiApachemaven,
  SiApachetomcat,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { TbSql } from 'react-icons/tb'
import { RiOpenaiFill } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'

export interface SkillItem {
  name: string
  icon: ComponentType<{ className?: string }>
  color: string
  badge?: string
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: SkillItem[]
}

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'SQL', icon: TbSql, color: '#336791' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    id: 'ai-data',
    label: 'AI & Data',
    icon: '🤖',
    skills: [
      { name: 'NumPy', icon: SiNumpy, color: '#4DABCF' },
      { name: 'Pandas', icon: SiPandas, color: '#E70488' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'XGBoost', icon: TbSql, color: '#108043', badge: 'ML' },
      { name: 'Matplotlib', icon: TbSql, color: '#11557c', badge: 'Data' },
      { name: 'OpenAI', icon: RiOpenaiFill, color: '#10A37F' },
      { name: 'MediaPipe', icon: SiMediapipe, color: '#00A88F' },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#E5E5E5' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Prisma', icon: SiPrisma, color: '#5A67D8' },
      { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: '📱',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'GitHub Pages', icon: SiGithubpages, color: '#8CC1E9' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
      { name: 'Maven', icon: SiApachemaven, color: '#C71A36' },
      { name: 'Apache Tomcat', icon: SiApachetomcat, color: '#F8DC75' },
    ],
  },
]

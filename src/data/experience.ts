import groupPhotoImg from '../assets/experience/group-photo.jpeg'
import ifsWorkshopImg from '../assets/experience/IFS-workshop.jpeg'
import finalPitchImg from '../assets/experience/final-pitch.jpeg'
import awardPhotoImg from '../assets/experience/award-photo.jpeg'
import finalHackathonImg from '../assets/experience/final-hackathon.jpeg'
import nexoraAiImg from '../assets/experience/NexoraAI.jpeg'

export interface GalleryPhoto {
  id: string
  title: string
  caption: string
  image: string
}

export interface Contribution {
  icon: string
  title: string
  description: string
}

export const experienceGallery: GalleryPhoto[] = [
  {
    id: 'team-photo',
    title: 'Team Nexora AI',
    caption: 'Working together to build AI solutions',
    image: groupPhotoImg,
  },
  {
    id: 'ifs-workshop',
    title: 'IFS AI Workshop',
    caption: 'Industry learning session with IFS AI Team',
    image: ifsWorkshopImg,
  },
  {
    id: 'final-pitch',
    title: 'Final Presentation',
    caption: 'Presenting our solution to industry judges',
    image: finalPitchImg,
  },
  {
    id: 'award-photo',
    title: 'Achievement Moment',
    caption: 'Receiving Merit Award recognition',
    image: awardPhotoImg,
  },
  {
    id: 'final-hackathon',
    title: '7-Hour Final Hackathon',
    caption: 'Developing our AI Dispatch Agent on-site at IFS',
    image: finalHackathonImg,
  },
  {
    id: 'nexora-architecture',
    title: 'Nexora AI System',
    caption: 'Evidence-based document investigation architecture',
    image: nexoraAiImg,
  },
]

export const contributions: Contribution[] = [
  {
    icon: '🧠',
    title: 'AI Design',
    description: 'Designed AI solution flow',
  },
  {
    icon: '🔎',
    title: 'RAG Pipeline',
    description: 'Worked with retrieval logic',
  },
  {
    icon: '🤖',
    title: 'AI Agents',
    description: 'Evaluated agent decisions',
  },
  {
    icon: '🎤',
    title: 'Presentation',
    description: 'Pitching & technical demo',
  },
]

export const experienceTech = {
  ai: [
    'RAG',
    'LLMs',
    'AI Agents',
    'Semantic Search',
    'Embeddings',
    'OCR',
    'Prompt Engineering',
  ],
  development: [
    'Python',
    'Git',
    'GitHub',
    'API Integration',
    'System Design',
  ],
}

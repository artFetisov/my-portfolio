import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import quizImage from '../assets/images/1621568763_18-phonoteka_org-p-kviz-fon-23.jpg'
import excelImg from '../assets/images/excel-indir-scaled.webp'
import socialImg from '../assets/images/social.jpg'


export type FilterType = 'react' | 'native' | 'next' | 'fullStack' | 'all'

export interface IPortfolioItem {
  category: FilterType[]
  icon: IconDefinition
  title: string
  description: string
  photo: string
  link: string
}

export const myWorks: IPortfolioItem[] = [
  {
    category: ['next'],
    title: 'Communication platform',
    description: 'Социальная сеть.',
    icon: faCircleQuestion,
    photo: socialImg,
    link: 'https://project-icn.work',
  },
  {
    category: ['react'],
    title: 'Learning platform',
    description: 'Приложение предназначено для обучения с помощью карточек, содержащих вопросы и ответы.',
    icon: faCircleQuestion,
    photo: quizImage,
    link: 'https://cards-app-artfetisov.vercel.app',
  },
  {
    category: ['native'],
    title: 'Excel',
    description: 'Это упрощенная версия программы Excel.',
    icon: faFileExcel,
    photo: excelImg,
    link: 'https://excel-new-p6do.vercel.app',
  },
]

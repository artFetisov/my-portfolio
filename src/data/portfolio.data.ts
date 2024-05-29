import { IconDefinition, faFirstOrder } from '@fortawesome/free-brands-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import quizImage from '../assets/images/1621568763_18-phonoteka_org-p-kviz-fon-23.jpg'
import excelImg from '../assets/images/excel-indir-scaled.webp'
import ozonImg from '../assets/images/6528604949.jpg'

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
    category: ['next', 'fullStack'],
    title: 'Ozon',
    description: 'A copy of the Ozon online store',
    icon: faFirstOrder,
    photo: ozonImg,
    link: 'https://ozon-front.vercel.app/',
  },
  {
    category: ['react'],
    title: 'Quizzz',
    description: 'This is an application where you can answer questions from other users and test your knowledge...',
    icon: faCircleQuestion,
    photo: quizImage,
    link: 'https://cards-app-artfetisov.vercel.app',
  },
  {
    category: ['native'],
    title: 'Excel',
    description: 'This is a simplified version of the excel program in native javascript...',
    icon: faFileExcel,
    photo: excelImg,
    link: 'https://excel-new-p6do.vercel.app',
  },
]

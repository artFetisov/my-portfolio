import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faCircleQuestion} from "@fortawesome/free-regular-svg-icons"
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faFileExcel} from "@fortawesome/free-solid-svg-icons";
import quizImage from '../assets/images/1621568763_18-phonoteka_org-p-kviz-fon-23.jpg';
import excelImg from '../assets/images/excel-indir-scaled.webp';
import mcTodoImg from '../assets/images/1581438951_todo_art.jpg'

export type FilterType = 'react' | 'native' | 'fullStack' | 'all' | 'angular'

export interface IPortfolioItem {
    category: FilterType
    icon: IconDefinition
    title: string
    description: string
    photo: string
    link: string
}

export const myWorks: IPortfolioItem[] = [
    {
        category: 'react',
        title: 'Quizzz',
        description: 'This is an application where you can answer questions from other users and test your knowledge...',
        icon: faCircleQuestion,
        photo: quizImage,
        link: 'https://cards-app-artfetisov.vercel.app'
    },
    {
        category: 'native',
        title: 'Excel',
        description: 'This is a simplified version of the excel program in native javascript...',
        icon: faFileExcel,
        photo: excelImg,
        link: 'https://excel-new-p6do.vercel.app'
    },
    {
        category: 'angular',
        title: 'Microsoft Todo',
        description: 'This is a copy of Microsoft todo...',
        icon: faCircleCheck,
        photo: mcTodoImg,
        link: 'https://client-todo-microsoft.vercel.app/'
    },
]
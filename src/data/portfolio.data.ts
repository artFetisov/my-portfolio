import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFileExcel} from "@fortawesome/free-solid-svg-icons";
import oneImage from '../assets/images/5-3d-character-development.jpg';
import twoPhoto from '../assets/images/7-3d-animation.jpg';

export type FilterType = 'react' | 'native' | 'fullStack' | 'all'

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
        title: 'Todo List',
        description: 'Lorem kjnfjkanflekjfbakljfbejkfefj hjdbfieuief efjnfeefe.......',
        icon: faInstagram,
        photo: oneImage,
        link: 'https://cards-app-artfetisov.vercel.app'
    },
    {
        category: 'native',
        title: 'Excel',
        description: 'Lorem kjnfjkanflekjfbakljfbejkfefj hjdbfieuief efjnfeefe.......',
        icon: faFileExcel,
        photo: twoPhoto,
        link: 'https://excel-new-p6do.vercel.app'
    },
]
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import oneImage from '../assets/images/5-3d-character-development.jpg';
import twoPhoto from '../assets/images/7-3d-animation.jpg';

export type FilterType = 'react' | 'native' | 'fullStack' | 'all'

export interface IPortfolioItem {
    category: FilterType
    icon: IconDefinition
    title: string
    description: string
    photo: string
}

export const myWorks: IPortfolioItem[] = [
    {
        category: 'react',
        title: 'Social Network',
        description: 'Mauris dapibus metus sagittis massa cursus, commodo elementum libero euismod pretium.',
        icon: faInstagram,
        photo: oneImage
    },
    {
        category: 'fullStack',
        title: 'Online Cinema',
        description: 'Lorem kjnfjkanflekjfbakljfbejkfefj hjdbfieuief efjnfeefe......mncbhdbhjsdbjhbsdkfbJADCNKLDJFiaejfo;iehauiofheuifhafhefgulehfukeafluiEfgaseiyfgseafgiyaegfiaefiuaefuigaegf.',
        icon: faInstagram,
        photo: twoPhoto
    },
    {
        category: 'react',
        title: 'Todo List',
        description: 'Lorem kjnfjkanflekjfbakljfbejkfefj hjdbfieuief efjnfeefe.......',
        icon: faInstagram,
        photo: oneImage
    },
    {
        category: 'native',
        title: 'Excel',
        description: 'Lorem kjnfjkanflekjfbakljfbejkfefj hjdbfieuief efjnfeefe.......',
        icon: faInstagram,
        photo: twoPhoto
    },
]
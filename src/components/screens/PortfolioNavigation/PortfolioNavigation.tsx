import {FC, useState} from "react";
import styles from './PortfolioNavigation.module.scss';
import {FilterType} from "../../../data/portfolio.data";
import {Nav} from "./Nav";

export interface ILink {
    title: string
    path: string
    filter: FilterType
}

export const links: ILink[] = [
    {title: 'All', path: '/', filter: 'all'},
    {title: 'React', path: 'about', filter: 'react'},
    {title: 'Native JS', path: 'portfolio', filter: 'native'},
    {title: 'FullStack', path: 'contact', filter: 'fullStack'}
]

export const PortfolioNavigation: FC = () => {
    const [localFilter, setLocalFilter] = useState<FilterType | string>('')

    return <nav className={styles.navContainer}>
        <ul className={styles.navBar}>
            {links.map((l, ind) => <Nav
                localFilter={localFilter}
                setLocalFilter={setLocalFilter}
                key={l.title + '-' + ind} link={l}/>)}
        </ul>
    </nav>
}
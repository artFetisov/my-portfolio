import { FC, useState } from 'react'
import styles from './PortfolioNavigation.module.scss'
import { FilterType } from '../../../data/portfolio.data'
import { Nav } from './Nav'

export interface ILink {
  title: string
  filter: FilterType
}

export const links: ILink[] = [
  { title: 'All', filter: 'all' },
  { title: 'React', filter: 'react' },
  { title: 'Native JS', filter: 'native' },
  { title: 'FullStack', filter: 'fullStack' },
  { title: 'Next JS', filter: 'next' },
]

export const PortfolioNavigation: FC = () => {
  const [localFilter, setLocalFilter] = useState<FilterType | string>('')

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navBar}>
        {links.map((l, ind) => (
          <Nav localFilter={localFilter} setLocalFilter={setLocalFilter} key={l.title + '-' + ind} link={l} />
        ))}
      </ul>
    </nav>
  )
}

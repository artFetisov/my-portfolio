import { FC } from 'react'
import { ILink } from './PortfolioNavigation'
import cn from 'classnames'
import styles from './PortfolioNavigation.module.scss'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setFilterThunk } from '../../../store/app/app.actions'
import { FilterType } from '../../../data/portfolio.data'

interface INavProps {
  link: ILink
  localFilter: FilterType | string
  setLocalFilter: (value: FilterType | string) => void
}

export const Nav: FC<INavProps> = ({ link, localFilter, setLocalFilter }) => {
  const filter = useAppSelector((state) => state.app.filter)

  const dispatch = useAppDispatch()

  const isActive = filter === link.filter && localFilter === ''
  const isLocalActive = localFilter === link.filter

  const onChangeFilter = () => {
    dispatch(setFilterThunk(link.filter))
  }

  const onLocalFilterHandler = () => {
    setLocalFilter(link.filter)
  }

  const onLocalFilterClear = () => {
    setLocalFilter('')
  }

  return (
    <li key={link.title + '-' + link.filter} onClick={onChangeFilter} onMouseEnter={onLocalFilterHandler} onMouseLeave={onLocalFilterClear}>
      <a
        className={cn({
          [styles.active]: isActive,
          [styles.localActive]: isLocalActive,
        })}
      >
        <span>{link.title}</span>
      </a>
    </li>
  )
}

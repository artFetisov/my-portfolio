import { FC, useEffect } from 'react'
import { CustomHeading } from '../../ui/CustomHeading/CustomHeading'
import { PortfolioNavigation } from '../../screens/PortfolioNavigation/PortfolioNavigation'
import styles from './PortfolioPage.module.scss'
import { FilterType, IPortfolioItem } from '../../../data/portfolio.data'
import { Works } from '../../screens/Works/Works'
import { useSetPhoto } from '../../../hooks/useSetPhoto'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setFilter, setSelectedWork } from '../../../store/app/app.slice'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const filterWorksHandler = (filter: FilterType, works: IPortfolioItem[]) => {
  if (filter === 'react') return works.filter((work) => work.category.includes('react'))
  if (filter === 'fullStack') return works.filter((work) => work.category.includes('fullStack'))
  if (filter === 'native') return works.filter((work) => work.category.includes('native'))
  if (filter === 'next') return works.filter((work) => work.category.includes('next'))
  return works
}

export const PortfolioPage: FC = () => {
  useSetPhoto()

  const filter = useAppSelector((state) => state.app.filter)
  const works = useAppSelector((state) => state.app.works)

  const dispatch = useAppDispatch()

  const filteredWorks = filterWorksHandler(filter, works as IPortfolioItem[])

  useEffect(() => {
    dispatch(setFilter('all'))
    dispatch(setSelectedWork(works[0]))
  }, [])

  return (
    <div className={styles.portfolioMainContainer}>
      <CustomHeading text={'creative portfolio'} />
      <div className={styles.portfolioContainer}>
        <PortfolioNavigation />
        <section className={styles.worksContainer}>
          <TransitionGroup>
            <CSSTransition key={filter} classNames={'works'} timeout={500}>
              <Works works={filteredWorks} />
            </CSSTransition>
          </TransitionGroup>
        </section>
      </div>
    </div>
  )
}

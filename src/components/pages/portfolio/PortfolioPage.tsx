import {FC, useEffect} from "react";
import {CustomHeading} from "../../ui/CustomHeading/CustomHeading";
import {PortfolioNavigation} from "../../screens/PortfolioNavigation/PortfolioNavigation";
import styles from './PortfolioPage.module.scss';
import {FilterType, IPortfolioItem, myWorks} from "../../../data/portfolio.data";
import {Works} from "../../screens/Works/Works";
import {useSetPhoto} from "../../../hooks/useSetPhoto";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setFilter, setSelectedWork, setSelectedWorks} from "../../../store/app/app.slice";
import {Work} from "../../screens/Works/Work";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const filterWorksHandler = (filter: FilterType, works: IPortfolioItem[]) => {
    if (filter === 'react') return works.filter(work => work.category === 'react')
    if (filter === 'fullStack') return works.filter(work => work.category === 'fullStack')
    if (filter === 'native') return works.filter(work => work.category === 'native')
    return works
}

export const PortfolioPage: FC = () => {
    useSetPhoto()

    const {filter, works} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()
    const filteredWorks = filterWorksHandler(filter, works as IPortfolioItem[])

    useEffect(() => {
        dispatch(setFilter('all'))
        dispatch(setSelectedWork(works[0]))
    }, [])

    return <div className={styles.portfolioMainContainer}>
        <CustomHeading text={'creative portfolio'}/>
        <div className={styles.portfolioContainer}>
            <PortfolioNavigation/>
            <section className={styles.worksContainer}>
                <TransitionGroup>
                    <CSSTransition key={filter} classNames={'works'} timeout={500}>
                        <Works works={filteredWorks}/>
                    </CSSTransition>
                </TransitionGroup>
            </section>
        </div>
    </div>
}
import {FC} from "react";
import {IPortfolioItem} from "../../../data/portfolio.data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './Works.module.scss';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setPhotoUrl, setSelectedWork} from "../../../store/app/app.slice";
import {useAppSelector} from "../../../hooks/useAppSelector";
import cn from 'classnames';
import {Link, NavLink} from "react-router-dom";

export const Work: FC<{ work: IPortfolioItem }> = ({work}) => {
    const dispatch = useAppDispatch()

    const selectedWork = useAppSelector(state => state.app.selectedWork)

    const isSelected = selectedWork === work

    const onMouseMoveHandler = () => {
        dispatch(setPhotoUrl(work.photo))
        dispatch(setSelectedWork(work))
    }

    return <a href={work.link} target="_blank" className={styles.work} onMouseOver={onMouseMoveHandler}>
        <div className={cn({[styles.selected]: isSelected})}>
                  <span className={styles.icon}>
                 <FontAwesomeIcon icon={work.icon}/>
            </span>
            <div className={styles.titleHolder}>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
            </div>
        </div>
    </a>
}
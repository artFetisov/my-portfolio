import {FC} from "react";
import {IPortfolioItem} from "../../../data/portfolio.data";
import {Work} from "./Work";
import styles from './Works.module.scss';

export const Works: FC<{ works: IPortfolioItem[] }> = ({works}) => {

    return <ul className={styles.works}>
        {
            works.length
                ? works.map((work, ind) => <Work key={work.title + '-' + ind} work={work}/>)
                : <div className={styles.worksNotFound}>Sorry, applications with such parameters will be downloaded
                    later...</div>
        }
    </ul>
}
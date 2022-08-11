import {FC} from "react";
import styles from './WorksBlock.module.scss';
import {worksData} from "./works.data";
import {WorksItem} from "./WorksItem";

export const WorksBlock: FC = () => {
    return <div className={styles.worksBlock}>
        <div className={styles.container}>
            <h2>Мои работы</h2>
            <div className={styles.works}>
                {worksData.map(work => <WorksItem work={work}/>)}
            </div>
        </div>
    </div>
}
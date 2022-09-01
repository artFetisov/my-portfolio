import {FC} from "react";
import styles from './MainBlock.module.scss';

export const MainBlock: FC = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.container}>
            <div className={styles.text}>
                <span>Hi There</span>
                <h1>I am Jeffrey Aaron</h1>
                <p>Frontend developer</p>
            </div>
            <div className={styles.photo}>image</div>
        </div>
    </div>
}
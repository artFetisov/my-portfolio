import {FC} from "react";
import styles from './ProgressBar.module.scss';
import Fade from "react-awesome-reveal";

interface IProgressBarProps {
    width: number
    label: string
}

export const ProgressBar: FC<IProgressBarProps> = ({width, label}) => {
    return <div className={styles.progressWrap}>
                                <span>
                                    <span className={styles.progressLabel}>{label}</span>
                                    <span className={styles.progressNumber}>{width}%</span>
                                </span>
        <div className={styles.progressBar}>
            <Fade triggerOnce={true}>
                <div className={styles.bar} style={{width: `${width}%`}}></div>
            </Fade>
        </div>

    </div>
}
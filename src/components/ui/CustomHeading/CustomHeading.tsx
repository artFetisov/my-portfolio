import {FC} from "react";
import styles from './CustomHeading.module.scss';

interface ICustomHeadingProps {
    text: string
}

export const CustomHeading: FC<ICustomHeadingProps> = ({text}) => {
    return <div className={styles.wrapper}>
        <h3 className={styles.title}>{text}</h3>
    </div>
}
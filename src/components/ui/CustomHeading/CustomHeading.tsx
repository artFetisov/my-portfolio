import {FC} from "react";
import styles from './CustomHeading.module.scss';

interface ICustomHeadingProps {
    text: string
    variant?: 'big' | 'small'
}

export const CustomHeading: FC<ICustomHeadingProps> = ({text, variant = 'big'}) => {
    return <>
        {variant === 'big'
            ? <div className={styles.wrapper}>
                <h3 className={styles.title}>{text}</h3>
            </div>
            : <div className={styles.smallWrapper}>
                <span className={styles.title}>{text}</span>
            </div>
        }
    </>
}
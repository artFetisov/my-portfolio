import {FC} from "react";
import styles from './WorksBlock.module.scss';
import {IWork} from "./works.data";
import {MyButton} from "../../ui/MyButton/MyButton";

export const WorksItem: FC<{ work: IWork }> = ({work}) => {
    const onClickHandler = () => {
        alert('Привет)')
    }

    return <div className={styles.work}>
        <div className={styles.img}>
            <MyButton onClick={onClickHandler}>Смотреть</MyButton>
        </div>
        <h3 className={styles.title}>{work.title}</h3>
        <span className={styles.description}>{work.description}</span>
    </div>
}
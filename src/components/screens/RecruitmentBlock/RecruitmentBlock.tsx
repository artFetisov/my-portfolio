import {FC} from "react";
import styles from './RecruitmentBlock.module.scss';
import {MyButton} from "../../ui/MyButton/MyButton";

export const RecruitmentBlock: FC = () => {
    const onClickHandler = () => {
        alert('Прекрасно')
    }

    return <div className={styles.recruitmentBlock}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.text}>Рассматриваю вариант удаленной работы</h2>
                <MyButton onClick={onClickHandler}>Нанять меня</MyButton>
            </div>
        </div>
    </div>
}
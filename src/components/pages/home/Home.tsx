import {FC} from "react";
import styles from './Home.module.scss';
import {MyButton} from "../../ui/MyButton/MyButton";
import {TypingEffect} from "../../ui/TypingEffect/TypingEffect";

export const Home: FC = () => {
    return <div>
        <div className={styles.heading}>
            <h2>ARTEM FETISOV</h2>
        </div>
        <div className={styles.border}>
        </div>
        <div className={styles.typingBlock}>
            <TypingEffect text={'Developer'}/>
        </div>
        <div className={styles.buttonWrap}>
            <MyButton>
                Get in Touch
            </MyButton>
        </div>
    </div>
}
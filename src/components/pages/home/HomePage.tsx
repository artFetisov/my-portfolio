import {FC} from "react";
import styles from './Home.module.scss';
import {MyButton} from "../../ui/MyButton/MyButton";
import {TypingEffect} from "../../ui/TypingEffect/TypingEffect";
import {Link} from "react-router-dom";
import {useSetPhoto} from "../../../hooks/useSetPhoto";

export const HomePage: FC = () => {
    useSetPhoto()

    return <div className={styles.homeContainer}>
        <div className={styles.heading}>
            <h2>ARTEM FETISOV</h2>
        </div>
        <div className={styles.border}>
        </div>
        <div className={styles.typingBlock}>
            <TypingEffect text={['Developer', 'Freelancer']}/>
        </div>
        <div className={styles.buttonWrap}>
            <Link to={'/my-portfolio/contact'}>
                <MyButton>
                    Get in Touch
                </MyButton>
            </Link>
        </div>
    </div>
}
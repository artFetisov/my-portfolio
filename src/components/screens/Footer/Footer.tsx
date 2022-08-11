import {FC} from "react";
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <h2>Иван Иванов</h2>
            <div className={styles.squares}>
                {Array(6).fill(null).map((_, ind) => <div
                    className={styles.square}
                    key={ind}
                    style={{backgroundColor: ind % 2 === 0 ? 'grey' : 'transparent'}}
                />)}
            </div>
            <span>2022 Все права защищены</span>
        </div>
    </footer>
}
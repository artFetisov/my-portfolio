import {FC} from "react";
import styles from './Header.module.scss';

export const Nav: FC = () => {
    return <nav className={styles.nav}>
        <a href='/it-incubator/my-portfolio/public'>Главная</a>
        <a href='/it-incubator/my-portfolio/public'>Скиллы</a>
        <a href='/it-incubator/my-portfolio/public'>Работы</a>
        <a href='/it-incubator/my-portfolio/public'>Контакты</a>
    </nav>
}
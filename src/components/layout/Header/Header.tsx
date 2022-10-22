import {FC} from "react";
import styles from './Header.module.scss';
import {NavBar} from "./NavBar/NavBar";

export const Header: FC = () => {
    return <header className={styles.header}>
        <div className={styles.navWrap}>
            <div>
            </div>
            <NavBar/>
        </div>
    </header>
}
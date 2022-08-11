import {FC} from "react";
import styles from './Header.module.scss';
import {Nav} from "./Nav";

export const Header: FC = () => {
    return <header className={styles.header}>
        <Nav/>
    </header>
}
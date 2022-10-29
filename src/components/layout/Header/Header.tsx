import {FC, useState} from "react";
import styles from './Header.module.scss';
import {NavBar} from "./NavBar/NavBar";

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return <header className={styles.header}>
        <div className={styles.navWrap}>
            <h2 style={{color: '#333'}}>
            </h2>
            <NavBar/>
        </div>
    </header>
}
import {FC, useState} from "react";
import {links} from "./links.data";
import {Link, useLocation} from "react-router-dom";
import styles from './NavBar.module.scss';
import cn from 'classnames';
import {BurgerButton} from "../../../ui/BurgerButton/BurgerButton";

export const NavBar: FC = () => {
    const {pathname} = useLocation()
    
    const [localPath, setLocalPath] = useState('')

    const onLocalPathHandler = (path: string) => {
        setLocalPath(path)
    }

    const onLocalPathClear = () => {
        setLocalPath('')
    }

    return <nav className={styles.navContainer}>
        <ul className={styles.navBar}>
            {links.map(l => <li key={l.title + '-' + l.path}>
                <Link to={l.path}
                      className={cn({
                          [styles.active]: pathname === l.path && localPath === '',
                          [styles.localActive]: localPath === l.path
                      })}
                      onMouseEnter={() => onLocalPathHandler(l.path)}
                      onMouseLeave={onLocalPathClear}
                >
                <span>
                    {l.title}
                </span>
                </Link></li>)}
        </ul>
        <BurgerButton/>
    </nav>
}
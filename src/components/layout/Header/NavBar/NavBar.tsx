import {FC, useState} from "react";
import {links} from "./links.data";
import {Link, useLocation} from "react-router-dom";
import styles from './NavBar.module.scss';
import cn from 'classnames';

export const NavBar: FC = () => {
    const {pathname} = useLocation()
    const [localPath, setLocalPath] = useState<string>('')

    const onLocalFilterHandler = (path: string) => {
        setLocalPath(path)
    }

    const onLocalFilterClear = () => {
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
                      onMouseEnter={() => onLocalFilterHandler(l.path)}
                      onMouseLeave={onLocalFilterClear}
                >
                <span>
                    {l.title}
                </span>
                </Link></li>)}
        </ul>
    </nav>
}
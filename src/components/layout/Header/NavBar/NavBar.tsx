import {FC} from "react";
import {links} from "./links.data";
import {Link} from "react-router-dom";
import styles from './NavBar.module.scss';

export const NavBar: FC = () => {
    return <nav className={styles.navContainer}>
        <ul className={styles.navBar}>
            {links.map(l => <li key={l.title + '-' + l.path}><Link to={l.path}>
                <span>
                    {l.title}
                </span>
            </Link></li>)}
        </ul>

    </nav>
}
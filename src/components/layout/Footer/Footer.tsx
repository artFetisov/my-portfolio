import {FC} from "react";
import styles from './Footer.module.scss';
import {SocialList} from "./SocialList";


export const Footer: FC = () => {
    return <footer className={styles.footer}>
        <div className={styles.copyright}>
            <p>Copyright © 2024</p>
        </div>
        <SocialList />
    </footer>
}
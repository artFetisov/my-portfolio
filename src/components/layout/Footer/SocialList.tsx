import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faTelegram,
    IconDefinition,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.scss';
import {Link} from "react-router-dom";

const socialIcons: { name: IconDefinition, path: string }[] = [
    {name: faFacebook, path: '/'},
    {name: faInstagram, path: '/'},
    {name: faYoutube, path: '/'},
    {name: faTelegram, path: '/'},
    {name: faLinkedinIn, path: '/'}
]

export const SocialList: FC = () => {
    return <ul className={styles.socialList}>
        {socialIcons.map((i, ind) => <li key={ind + '-' + i.path}>
            <div>
                <Link to={i.path}>
                    <FontAwesomeIcon icon={i.name}/>
                </Link>
            </div>
        </li>)}
    </ul>
}

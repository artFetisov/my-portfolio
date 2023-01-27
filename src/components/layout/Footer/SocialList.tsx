import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
    faTelegram,
    faNodeJs,
    IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.scss';

const socialIcons: { name: IconDefinition, path: string }[] = [
    {name: faInstagram, path: 'https://instagram.com/artfetisov?igshid=YmMyMTA2M2Y='},
    {name: faTelegram, path: 'https://t.me/artFetisov'},
    {name: faGithub, path: 'https://github.com/artFetisov'},
    {name: faNodeJs, path: 'https://www.codewars.com/users/artFetisov'}
]

export const SocialList: FC = () => {
    return <ul className={styles.socialList}>
        {socialIcons.map((i, ind) => <li key={ind + '-' + i.path}>
            <div>
                <a href={i.path} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={i.name}/>
                </a>
            </div>
        </li>)}
    </ul>
}

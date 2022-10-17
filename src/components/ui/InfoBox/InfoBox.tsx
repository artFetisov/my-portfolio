import {FC} from "react";
import styles from './InfoBox.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

interface IInfoBoxProps {
    text: string
    icon: IconDefinition
}

export const InfoBox: FC<IInfoBoxProps> = ({text, icon}) => {
    return <div className={styles.itemWrap}>
        <div className={styles.iconWrap}>
            <FontAwesomeIcon icon={icon}/>
        </div>
        <div className={styles.infoWrap}>
            <p>{text}</p>
        </div>
    </div>
}
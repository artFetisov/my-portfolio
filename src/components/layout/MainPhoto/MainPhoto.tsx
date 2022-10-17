import {FC} from "react";
import styles from './MainPhoto.module.scss';
import photo from '../../../assets/images/photo.jpg';

export const MainPhoto: FC = () => {
    return <div className={styles.imageWrap}>
        <img className={styles.image} src={photo} alt={'photo'}/>
    </div>

}
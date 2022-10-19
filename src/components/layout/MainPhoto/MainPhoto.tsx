import {FC, useContext} from "react";
import styles from './MainPhoto.module.scss';
import photo from '../../../assets/images/photo.jpg';
import {useAppSelector} from "../../../hooks/useAppSelector";

export const MainPhoto: FC = () => {
    const {photoUrl} = useAppSelector(state => state.app)

    return <div className={styles.imageWrap}>
        <img className={styles.image} src={photoUrl} alt={'photo'}/>
    </div>
}
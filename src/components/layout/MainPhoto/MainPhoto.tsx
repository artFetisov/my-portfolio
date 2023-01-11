import React, {FC} from "react";
import styles from './MainPhoto.module.scss';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {MyParticle} from "../../ui/MyParticle/MyParticle";

export const MainPhoto: FC = () => {
    const photoUrl = useAppSelector(state => state.app.photoUrl)

    const divBackground = {
        backgroundImage: `url(${(photoUrl)})`,
    }

    return <div className={styles.imageWrap}>
        <MyParticle/>
        <div style={divBackground} className={styles.image}></div>
    </div>
}
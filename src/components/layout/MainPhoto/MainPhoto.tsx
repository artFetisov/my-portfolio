import {FC} from "react";
import styles from './MainPhoto.module.scss';
import photo from '../../../assets/images/photo.jpg';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const MainPhoto: FC = () => {
    const {photoUrl} = useAppSelector(state => state.app)

    return <div className={styles.imageWrap}>
        <TransitionGroup>
            <CSSTransition key={photoUrl} classNames='photo' timeout={500}>
                <img className={styles.image} src={photoUrl} alt={'photo'}/>
            </CSSTransition>
        </TransitionGroup>
    </div>
}
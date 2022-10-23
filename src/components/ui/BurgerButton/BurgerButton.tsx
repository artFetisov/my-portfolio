import {FC} from "react";
import styles from './BurgerButton.module.scss';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setIsOpen} from "../../../store/app/app.slice";
import {useAppSelector} from "../../../hooks/useAppSelector";

export const BurgerButton: FC = () => {
    const dispatch = useAppDispatch()
    const {isOpenMenu} = useAppSelector(state => state.app)

    const onClickHandler = () => {
        dispatch(setIsOpen(!isOpenMenu))
    }

    return <div className={styles.burger} onClick={onClickHandler}>
        <span className={styles.a}></span>
        <span className={styles.b}></span>
        <span className={styles.c}></span>
    </div>
}
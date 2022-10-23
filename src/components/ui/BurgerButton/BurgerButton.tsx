import {FC, useState} from "react";
import styles from './BurgerButton.module.scss';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setIsOpen} from "../../../store/app/app.slice";
import {useAppSelector} from "../../../hooks/useAppSelector";
import cn from 'classnames';

export const BurgerButton: FC = () => {
    const dispatch = useAppDispatch()
    const {isOpenMenu} = useAppSelector(state => state.app)
    const [localActive, setLocalActive] = useState(false)

    const onClickHandler = () => {
        dispatch(setIsOpen(!isOpenMenu))
    }

    const onLocalFilterHandler = () => {
        setLocalActive(true)
    }

    const onLocalFilterClear = () => {
        setLocalActive(false)
    }

    return <div className={cn(styles.burger, {
        [styles.active]: isOpenMenu || localActive,
    })} onClick={onClickHandler}
                onMouseEnter={onLocalFilterHandler}
                onMouseLeave={onLocalFilterClear}
    >
        <span className={styles.a}></span>
        <span className={styles.b}></span>
        <span className={styles.c}></span>
    </div>
}
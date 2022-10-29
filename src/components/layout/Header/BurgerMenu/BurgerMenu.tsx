import {FC} from "react";
import styles from './BurgerMenu.module.scss';
import {CustomHeading} from "../../../ui/CustomHeading/CustomHeading";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import cn from 'classnames';
import {links} from "../NavBar/links.data";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {setIsOpen} from "../../../../store/app/app.slice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {set} from "react-hook-form";

export const BurgerMenu: FC = () => {
    const {isOpenMenu} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(setIsOpen(!isOpenMenu))
    }

    const onCloserHandler = () => {
        dispatch(setIsOpen(false))
    }

    return <>
        <div className={cn(styles.menuContainer, {
            [styles.show]: isOpenMenu
        })}>
            <div className={styles.topBorder}></div>
            <div className={styles.listWrapper}>
                <CustomHeading text={'Mobile Menu'} variant={'small'}/>
                <ul className={styles.list}>
                    {links.map(l => <li key={l.title + '-' + l.path} onClick={onClickHandler}>
                        <Link to={l.path}
                        >
                <span>
                    {l.title}
                </span>
                        </Link></li>)}
                </ul>
            </div>
            <div className={styles.closer} onClick={onCloserHandler}>
                <FontAwesomeIcon icon={faXmark} className={styles.icon}/>
            </div>
        </div>
    </>
}
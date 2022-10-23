import React, {FC} from 'react';
import {Layout} from "./components/layout/Layout";
import styles from './App.module.scss';
import {Router} from "./router/Router";
import {useAppSelector} from "./hooks/useAppSelector";
import cn from 'classnames';
import {BurgerMenu} from "./components/layout/Header/BurgerMenu/BurgerMenu";


export const App: FC = () => {
    const {isOpenMenu} = useAppSelector(state => state.app)

    return <div className={styles.mainContainer}>
        <div className={cn(styles.mainContainer, {
            [styles.translate]: isOpenMenu
        })}>
            <Layout>
                <Router/>
            </Layout>
        </div>
        <BurgerMenu/>
    </div>
}



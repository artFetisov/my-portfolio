import React, {FC} from 'react';
import {Layout} from "./components/layout/Layout";
import styles from './App.module.scss';
import {Router} from "./router/Router";
import {useAppSelector} from "./hooks/useAppSelector";
import cn from 'classnames';
import {BurgerMenu} from "./components/layout/Header/BurgerMenu/BurgerMenu";
// @ts-ignore
import AnimatedCursor from "react-animated-cursor";

export const App: FC = () => {
    const isOpenMenu = useAppSelector(state => state.app.isOpenMenu)

    // заполнить всю информацию, прикрепить ссылки на проекты и соцсети.

    return <div className={styles.mainContainer}>
        <div className={cn(styles.mainContainer, {
            [styles.translate]: isOpenMenu
        })}>
            <Layout>
                <Router/>
            </Layout>
        </div>
        <BurgerMenu/>
        <AnimatedCursor
            innerSize={7}
            outerSize={30}
            color='125, 119, 137'
            innerStyle={{opacity: '0.5'}}
            outerStyle={{
                opacity: '0.4',
                color: 'rgba(0, 0, 0, 0.5)'
                // backgroundColor: 'none',
            }}
            outerAlpha={0.15}
            innerScale={0}
            outerScale={2.6}
            clickables={[
                'a',
                // 'input[type="text"]',
                // 'input[type="email"]',
                // 'input[type="number"]',
                // 'input[type="submit"]',
                // 'input[type="image"]',
                'label[for]',
                'select',
                // 'textarea',
                'button',
                '.link'
            ]}
            hasBlendMode={true}
        />
    </div>
}



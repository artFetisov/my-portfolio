import {FC, ReactNode} from "react";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {MainPhoto} from "./MainPhoto/MainPhoto";
import styles from './Layout.module.scss';
import {MyParticle} from "../ui/MyParticle/MyParticle";
import {useLocation} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Layout: FC<{ children: ReactNode }> = ({children}) => {
    const location = useLocation()

    return <>
        <Header/>
        <div className={styles.contentContainer}>
            <MainPhoto/>
            <MyParticle/>

            <TransitionGroup>
                <CSSTransition key={location.key} classNames={'fade'} timeout={500}>
                    <div className={styles.rightSideWrap}>
                        <div className={styles.page}>
                            {children}
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
        <Footer/>
    </>
}
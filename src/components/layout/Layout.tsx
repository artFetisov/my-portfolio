import {FC, ReactNode} from "react";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {MainPhoto} from "./MainPhoto/MainPhoto";
import styles from './Layout.module.scss';
import {MyParticle} from "../ui/MyParticle/MyParticle";

export const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return <>
        <Header/>
        <div className={styles.contentContainer}>
            <MainPhoto/>
            <MyParticle/>
            <div className={styles.rightSideWrap}>
                <div className={styles.rightSideContainer}>
                    {children}
                </div>
            </div>
        </div>
        <Footer/>
    </>
}
import React, {FC} from 'react';
import {Layout} from "./components/layout/Layout";
import styles from './App.module.scss';
import {Router} from "./router/Router";


export const App: FC = () => {
    return <div className={styles.mainContainer}>
        <Layout>
            <Router/>
        </Layout>
    </div>
}



import React, {FC} from 'react';
import {Layout} from "./components/layout/Layout";
import styles from './App.module.scss';
import {Home} from "./components/pages/home/Home";


export const App: FC = () => {
    return <div className={styles.mainContainer}>
        <Layout>
            <Home />
        </Layout>
    </div>
}



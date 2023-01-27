import {FC} from "react"
import ReduxToastrLib from 'react-redux-toastr'
import styles from './ReduxToastrModule.module.scss'

export const ReduxToastr: FC = () => {
    return <ReduxToastrLib
        className={styles.toastr}
        newestOnTop={false}
        preventDuplicates
        progressBar
        closeOnToastrClick
        timeOut={30000}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
    />
}
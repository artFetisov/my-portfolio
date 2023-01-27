import {FC} from "react"
import ReduxToastrLib from 'react-redux-toastr'
import styles from './ReduxToastrModule.module.scss'

export const ReduxToastr: FC = () => {
    return <ReduxToastrLib
        className={styles.toastr}
        newestOnTop={false}
        preventDuplicates
        progressBar
        position={'bottom-center'}
        closeOnToastrClick
        timeOut={3000}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
    />
}
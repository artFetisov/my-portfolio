import {reducer as appReducer} from './app/app.slice';
import {reducer as mailReducer} from './mail/mail.slice';
import {reducer as toastrReducer} from 'react-redux-toastr'

export const reducers = {
    app: appReducer,
    mail: mailReducer,
    toastr: toastrReducer
}
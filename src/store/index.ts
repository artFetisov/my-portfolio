import {configureStore} from "@reduxjs/toolkit";
import {reducers} from "./rootReducer";
import mainPhoto from '../assets/images/photo.jpg';
import {IAppState} from "./app/app.types";
import {myWorks} from "../data/portfolio.data";

const preloadedState = {
    app: {
        photoUrl: mainPhoto,
        filter: 'all',
        works: myWorks
    } as IAppState
}

export const store = configureStore({
    reducer: reducers,
    devTools: true,
    preloadedState
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>

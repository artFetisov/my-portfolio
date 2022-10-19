import mainPhoto from '../assets/images/photo.jpg';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {myWorks} from "../data/portfolio.data";
import {useAppSelector} from "./useAppSelector";
import {useAppDispatch} from "./useAppDispatch";
import {setPhotoUrl} from "../store/app/app.slice";

export const useSetPhoto = () => {
    const {pathname} = useLocation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (pathname !== '/portfolio') {
            dispatch(setPhotoUrl(mainPhoto))
        } else {
            dispatch(setPhotoUrl(myWorks[0].photo))
        }
    }, [])
}
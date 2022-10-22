import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilterType} from "../../data/portfolio.data";
import {setFilter, setPhotoUrl, setSelectedWork, setSelectedWorks} from "./app.slice";
import {AppRootState} from "../index";

export const setFilterThunk = createAsyncThunk<void, FilterType, { state: AppRootState }>
('app/setFilterThunk', async (filter, {
    dispatch,
    rejectWithValue,
    getState
}) => {
    try {
        const works = getState().app.works
        Promise.all([await dispatch(setFilter(filter)), await dispatch(setSelectedWorks({
            works,
            filter
        }))]).then(() => {
            console.log(getState().app.selectedWorks)
            const selectedWork = getState().app.selectedWorks[0]
            dispatch(setSelectedWork(selectedWork))
            dispatch(setPhotoUrl(selectedWork.photo))
        })
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
    }
})
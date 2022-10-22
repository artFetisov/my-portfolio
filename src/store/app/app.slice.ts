import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAppState} from "./app.types";
import {FilterType, IPortfolioItem} from "../../data/portfolio.data";

const initialState: IAppState = {
    photoUrl: '',
    filter: 'all',
    works: [],
    selectedWork: null,
    selectedWorks: []
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPhotoUrl(state, action: PayloadAction<string>) {
            state.photoUrl = action.payload
        },
        setFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload
        },
        setSelectedWork(state, action: PayloadAction<IPortfolioItem>) {
            state.selectedWork = action.payload
        },
        // @ts-ignore
        setSelectedWorks(state, action: PayloadAction<{ works: IPortfolioItem[], filter: FilterType }>) {
            if (action.payload.filter === 'all') {
                state.selectedWorks = action.payload.works.map(w => w)
            } else {
                state.selectedWorks = action.payload.works.filter(w => w.category === action.payload.filter)
            }

        },
    },
})

export const {setPhotoUrl, setFilter, setSelectedWork, setSelectedWorks} = appSlice.actions

export const {reducer} = appSlice
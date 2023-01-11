import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAppState} from "./app.types";
import {FilterType, IPortfolioItem} from "../../data/portfolio.data";

const initialState: IAppState = {
    photoUrl: '',
    filter: 'all',
    works: [],
    selectedWork: null,
    selectedWorks: [],
    isOpenMenu: false
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
        setSelectedWorks(state, action: PayloadAction<{ works: IPortfolioItem[], filter: FilterType }>) {
            if (action.payload.filter === 'all') {
                state.selectedWorks = action.payload.works.map(w => w)
            } else {
                state.selectedWorks = action.payload.works.filter(w => w.category === action.payload.filter)
            }
        },
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpenMenu = action.payload
        }
    },
})

export const {setPhotoUrl, setFilter, setSelectedWork, setSelectedWorks, setIsOpen} = appSlice.actions

export const {reducer} = appSlice
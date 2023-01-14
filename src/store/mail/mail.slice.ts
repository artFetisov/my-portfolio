import {IMailState, StatusType} from "./mail.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IMailState = {
    status: 'idle'
}

const mailSlice = createSlice({
    initialState,
    name: 'mail',
    reducers: {
        setMailStatus(state, action: PayloadAction<{ status: StatusType }>) {
            state.status = action.payload.status
        }
    }
})

export const {setMailStatus} = mailSlice.actions

export const {reducer} = mailSlice
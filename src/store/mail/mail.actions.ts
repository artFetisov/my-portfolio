import {createAsyncThunk} from "@reduxjs/toolkit";
import {IContactData} from "../../types/contacts.types";
import {setMailStatus} from "./mail.slice";
import {MailService} from "../../services/mail.service";
import {toastr} from "react-redux-toastr";

export const sendMailTC = createAsyncThunk<void, IContactData>('send-mail', async (data, {dispatch}) => {
    try {
        dispatch(setMailStatus({status: 'loading'}))

        await MailService.sendMail(data)

        dispatch(setMailStatus({status: 'succeeded'}))
        toastr.success('Your message has been sent', 'I will answer you soon')
    } catch (error) {
        dispatch(setMailStatus({status: 'failed'}))
        toastr.error('Error', 'Your message has not been sent, an error has occurred')
    }

})
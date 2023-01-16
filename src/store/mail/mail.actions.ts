import {createAsyncThunk} from "@reduxjs/toolkit";
import {IContactData} from "../../types/contacts.types";
import {setMailStatus} from "./mail.slice";
import {MailService} from "../../services/mail.service";
import {toastr} from "react-redux-toastr";

export const sendMailTC = createAsyncThunk<void, IContactData>('send-mail', async (data, {dispatch}) => {
    try {
        dispatch(setMailStatus({status: 'loading'}))

       const response =  await MailService.sendMail(data)

        console.log(response)

        dispatch(setMailStatus({status: 'succeeded'}))
        toastr.success('Send mail', 'mail is sended')
    } catch (error) {
        dispatch(setMailStatus({status: 'failed'}))
        toastr.error('Error', 'mail is not sended')
    }

})
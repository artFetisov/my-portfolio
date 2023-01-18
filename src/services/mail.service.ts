import {axiosInstance} from "../api/axios.instance";
import {IContactData} from "../types/contacts.types";

export const MailService = {
    sendMail(data: IContactData) {
        return axiosInstance.get('/')
    }
}
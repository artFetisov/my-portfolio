import {axiosInstance} from "../api/axios.instance";
import {IContactData} from "../types/contacts.types";

export const MailService = {
    async sendMail(data: IContactData) {
        return axiosInstance.post('send-mail', data)
    }
}
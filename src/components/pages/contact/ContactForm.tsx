import {FC, useState} from "react";
import styles from "./ContactPage.module.scss";
import {MyInput} from "../../ui/MyInput/MyInput";
import {MyTextarea} from "../../ui/MyTextarea/MyTextarea";
import {MyButton} from "../../ui/MyButton/MyButton";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {IContactData} from "../../../types/contacts.types";
import {validEmail} from "../../../utils/validEmail";
import {Spinner} from "../../ui/Spinner/Spinner";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {sendMailTC} from "../../../store/mail/mail.actions";
import {useAppSelector} from "../../../hooks/useAppSelector";

export const ContactForm: FC = () => {
    const dispatch = useAppDispatch()

    const mailStatus = useAppSelector(state => state.mail.status)

    const {
        reset,
        register,
        handleSubmit,
        formState,
    } = useForm<IContactData>({
        mode: 'onSubmit',
    })

    const onSubmit: SubmitHandler<IContactData> = (data) => {
        dispatch(sendMailTC(data))
        // reset()
    }

    const onError: SubmitErrorHandler<IContactData> = (data: any, event: any) => {

    }

    const isErrors = formState.errors.email?.message || formState.errors.name?.message

    return <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>

        <MyInput  {...register('name', {
            required: 'The field is required.',
        })}
                  error={formState.errors.name}
                  placeholder={'Name'}
        />

        <MyInput {...register('email', {
            required: 'The field is required.',
            pattern: {
                value: validEmail,
                message: 'The e-mail address entered is invalid.',
            },
        })} error={formState.errors.email}
                 placeholder={'Email'}
        />

        <MyTextarea
            {...register('message')}
            error={formState.errors.message}
            placeholder={'Message'}
        />

        <div style={{display: 'flex', alignItems: 'center'}}>
            <MyButton type={'submit'} style={{padding: '0 30px', textTransform: 'uppercase', lineHeight: '50px'}}>Send
                Message</MyButton>
            {mailStatus === 'loading' && <Spinner/>}
        </div>

        <>
            {isErrors &&
                <div className={styles.responseWarning}>One or more fields have an error. Please check and try
                    again.</div>}
        </>
    </form>
}
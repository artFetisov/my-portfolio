import {FC, useState} from "react";
import styles from "./ContactPage.module.scss";
import {MyInput} from "../../ui/MyInput/MyInput";
import {MyTextarea} from "../../ui/MyTextarea/MyTextarea";
import {MyButton} from "../../ui/MyButton/MyButton";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {IContactData} from "../../../types/contacts.types";
import {validEmail} from "../../../utils/validEmail";
import {Spinner} from "../../ui/Spinner/Spinner";

export const ContactForm: FC = () => {
    const [isShowSpinner, setIsShowSpinner] = useState(false)

    const {
        reset,
        register,
        handleSubmit,
        formState,
    } = useForm<IContactData>({
        mode: 'onSubmit',
    })

    const onSubmit: SubmitHandler<IContactData> = (data) => {
        setIsShowSpinner(true)
        console.log('submit')

        setTimeout(() => {
            console.log(data)
            reset()
            setIsShowSpinner(false)
        }, 2000)
    }

    const onError: SubmitErrorHandler<IContactData> = (data: any, event: any) => {
        setIsShowSpinner(true)

        setTimeout(() => {
            console.log(data)
            setIsShowSpinner(false)
        }, 2000)

        console.log('error')
        console.log(data, '---', event)
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
            {isShowSpinner && <Spinner/>}
        </div>

        <>
            {isErrors &&
                <div className={styles.responseWarning}>One or more fields have an error. Please check and try
                    again.</div>}
        </>

        {/*<>*/}
        {/*    {isError &&*/}
        {/*<div>There was an error trying to send your message. Please try again later.</div>}*/}
        {/*</>*/}
    </form>
}
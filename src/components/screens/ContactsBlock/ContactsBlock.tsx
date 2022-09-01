import {FC, useState, MouseEvent} from "react";
import styles from './ContactsBlock.module.scss';
import {MyInput} from "../../ui/MyInput/MyInput";
import {MyTextarea} from "../../ui/MyTextarea/MyTextarea";
import {MyButton} from "../../ui/MyButton/MyButton";

export const ContactsBlock: FC = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [description, setDescription] = useState('')

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        alert(`name: ${name} || password: ${password} || description: ${description}`)
    }

    return <div className={styles.contactsBlock}>
        <div className={styles.container}>
            <form className={styles.form}>
                <h2>Контакты</h2>
                <div className={styles.fields}>
                    <MyInput value={name} setValue={setName} type={'text'} placeholder={'name'}/>
                    <MyInput value={password} setValue={setPassword} type={'password'} placeholder={'password'}/>
                    <MyTextarea value={description} setValue={setDescription}/>
                </div>
                <MyButton onClick={onClickHandler}>Отправить</MyButton>
            </form>
        </div>
    </div>
}
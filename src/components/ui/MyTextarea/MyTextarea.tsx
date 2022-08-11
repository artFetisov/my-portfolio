import {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import styles from './MyTextarea.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

interface IMyTextareaProps extends DefaultInputPropsType {
    setValue: (value: string) => void
}

export const MyTextarea: FC<IMyTextareaProps> = ({setValue, ...props}) => {
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.currentTarget.value)
    }

    return <textarea className={styles.textarea} onChange={onChangeHandler} {...props}/>
}
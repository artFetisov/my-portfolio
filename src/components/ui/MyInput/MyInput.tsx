import {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import styles from './MyInput.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IMyInputProps extends DefaultInputPropsType {
    setValue: (value: string) => void
}

export const MyInput: FC<IMyInputProps> = ({setValue, ...props}) => {
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
    }

    return <input className={styles.input}
                  name="input"
                  onChange={onChangeHandler}
                  {...props}/>
}
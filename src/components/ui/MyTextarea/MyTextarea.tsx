import {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";
import styles from './MyTextarea.module.scss';
import cn from 'classnames';
import {FieldError} from "react-hook-form";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

interface IMyTextareaProps extends DefaultInputPropsType {
    stylesI?: string | number | {}
    error: FieldError | undefined
}

export const MyTextarea = forwardRef<HTMLTextAreaElement, IMyTextareaProps>(({error, stylesI, ...props}, ref) => {

    return <div className={styles.textareaWrap}>
        <textarea ref={ref} className={cn(styles.textarea, stylesI)} {...props}/>
        {error && <div className={styles.error}>{error.message}</div>}
    </div>
})
import {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";
import styles from './MyInput.module.scss';
import {FieldError} from "react-hook-form";
import cn from 'classnames';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IMyInputProps extends DefaultInputPropsType {
    stylesI?: string | number | {}
    error: FieldError | undefined
}

export const MyInput = forwardRef<HTMLInputElement, IMyInputProps>(({error, stylesI, ...props}, ref) => {

    return <div className={styles.wrapperInp}><input ref={ref} className={cn(styles.input, stylesI)}
                                                     style={styles}
                                                     name="input"
                                                     {...props}/>
        {error && <div className={styles.error}>{error.message}</div>}
    </div>
})
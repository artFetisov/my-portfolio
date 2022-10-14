import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from "react";
import styles from './MyButton.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


interface IMyButtonProps extends DefaultButtonPropsType {
    children: ReactNode
}

export const MyButton: FC<IMyButtonProps> = ({children, ...props}) => {
    return <button className={styles.btn} {...props}>
        <span> {children}</span>
    </button>
}
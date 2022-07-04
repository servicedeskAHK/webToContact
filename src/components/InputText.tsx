import { FC, InputHTMLAttributes } from "react"
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputText: FC<InputProps> = ({ label, ...rest }) => {
    return (
        <div className={styles.inputWrapper}>
            <span>{label}</span>
            <input {...rest} />
        </div>
    )
}
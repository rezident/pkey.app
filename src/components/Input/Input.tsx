import { clsx } from 'clsx';
import { type ComponentPropsWithoutRef, type FC, useId } from 'react';

import styles from './Input.module.css';

interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'placeholder'> {
    label: string;
    className?: string;
}

export const Input: FC<Props> = ({ label, className, id, ...inputProps }) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <div className={clsx(styles.root, className)}>
            <input {...inputProps} id={inputId} className={styles.control} placeholder="" />
            <label className={styles.label} htmlFor={inputId}>
                {label}
            </label>
        </div>
    );
};

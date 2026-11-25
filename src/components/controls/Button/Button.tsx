import { clsx } from 'clsx';
import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import styles from './Button.module.css';

interface Props extends PropsWithChildren {
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'secondary';
}

export const Button: FC<Props> = ({ children, disabled = false, onClick, variant = 'primary' }) => {
    return (
        <button
            className={clsx(styles.root, { [styles.secondary]: variant === 'secondary' })}
            disabled={disabled}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
};

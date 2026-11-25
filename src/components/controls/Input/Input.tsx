import { clsx } from 'clsx';
import type { LucideIcon } from 'lucide-react';
import { type ComponentPropsWithoutRef, type FC, useId } from 'react';

import { IconButton } from '~/components/controls/IconButton/IconButton.tsx';

import styles from './Input.module.css';

interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'placeholder'> {
    label: string;
    className?: string;
    controlClassName?: string;
    action?: {
        icon: LucideIcon;
        onClick: VoidFunction;
        disabled?: boolean;
    };
}

export const Input: FC<Props> = ({
    action,
    label,
    className,
    controlClassName,
    id,
    ...inputProps
}) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <div className={clsx(styles.root, className)}>
            <input
                {...inputProps}
                id={inputId}
                className={clsx(styles.control, action && styles.withAction, controlClassName)}
                placeholder=""
            />
            <label className={styles.label} htmlFor={inputId}>
                {label}
            </label>
            {action && (
                <IconButton
                    className={styles.action}
                    Icon={action.icon}
                    onClick={action.onClick}
                    disabled={action.disabled}
                />
            )}
        </div>
    );
};

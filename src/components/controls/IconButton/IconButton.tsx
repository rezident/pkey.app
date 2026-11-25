import { clsx } from 'clsx';
import type { LucideIcon } from 'lucide-react';
import type { FC } from 'react';

import styles from './IconButton.module.css';

interface Props {
    Icon: LucideIcon;
    onClick: VoidFunction;
    disabled?: boolean;
    className?: string;
}

export const IconButton: FC<Props> = ({ className, disabled, Icon, onClick }) => {
    return (
        <button
            className={clsx(styles.root, className)}
            onClick={onClick}
            type="button"
            disabled={disabled}
        >
            {<Icon size="20" />}
        </button>
    );
};

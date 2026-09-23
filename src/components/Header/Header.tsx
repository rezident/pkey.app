import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

import styles from './Header.module.css';

interface Props extends PropsWithChildren {
    className?: string;
}

export const Header: FC<Props> = ({ className, children }) => {
    return <h1 className={clsx(styles.root, className)}>{children}</h1>;
};

import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

import styles from './Paragraph.module.css';

interface Props extends PropsWithChildren {
    className?: string;
}

export const Paragraph: FC<Props> = ({ className, children }) => {
    return <p className={clsx(styles.root, className)}>{children}</p>;
};

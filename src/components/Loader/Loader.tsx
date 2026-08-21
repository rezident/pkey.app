import type { FC, PropsWithChildren } from 'react';

import styles from './Loader.module.css';

interface Props extends PropsWithChildren {
    isLoading: boolean;
}

export const Loader: FC<Props> = ({ isLoading, children }) => {
    if (!isLoading) return children;

    return (
        <div className={styles.root}>
            <div className={styles.spinner} />
        </div>
    );
};

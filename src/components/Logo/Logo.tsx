import { clsx } from 'clsx';
import type { FC } from 'react';

import logoDarkUrl from './assets/logo-dark.svg';
import logoLightUrl from './assets/logo-light.svg';

import styles from './Logo.module.css';

interface Props {
    className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
    return (
        <>
            <img
                alt="pkey.app"
                src={logoDarkUrl}
                className={clsx(styles.root, styles.dark, className)}
            />
            <img
                alt="pkey.app"
                src={logoLightUrl}
                className={clsx(styles.root, styles.light, className)}
            />
        </>
    );
};

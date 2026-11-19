import type { FC, PropsWithChildren } from 'react';

import { Header } from '~/components/Header/Header.tsx';
import { Logo } from '~/components/Logo/Logo.tsx';

import styles from './OnboardingLayout.module.css';

interface Props extends PropsWithChildren {
    header: string;
}

export const OnboardingLayout: FC<Props> = ({ children, header }) => {
    return (
        <main className={styles.root}>
            <Logo className={styles.logo} />
            <Header className={styles.header}>{header}</Header>
            {children}
        </main>
    );
};

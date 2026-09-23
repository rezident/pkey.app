import { EyeOff, Shield, UserMinus } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '~/components/Button/Button';
import { Header } from '~/components/Header/Header';
import { Logo } from '~/components/Logo/Logo';
import { Paragraph } from '~/components/Paragraph/Paragraph';

import styles from './WelcomeScreen.module.css';

export const WelcomeScreen: FC = () => {
    return (
        <main className={styles.root}>
            <Logo className={styles.logo} />
            <Header className={styles.header}>Your passwords stay yours</Header>
            <div className={styles.description}>
                <Paragraph className={styles.paragraph}>
                    pkey.app is a private, local-first password manager. Your encrypted vault is
                    stored on this device — not on our servers.
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                    Create a new vault or open an existing one to get started.
                </Paragraph>
            </div>
            <div className={styles.actions}>
                <Button>Create a new vault</Button>
                <Button variant="secondary">Open an existing vault</Button>
            </div>
            <div className={styles.benefits}>
                <div className={styles.benefit}>
                    <Shield size="32" />
                    <Paragraph className={styles.paragraph}>
                        Encrypted
                        <br />
                        on your device
                    </Paragraph>
                </div>
                <div className={styles.benefit}>
                    <UserMinus size="32" />
                    <Paragraph className={styles.paragraph}>
                        No account
                        <br /> required
                    </Paragraph>
                </div>
                <div className={styles.benefit}>
                    <EyeOff size="32" />
                    <Paragraph className={styles.paragraph}>
                        No
                        <br />
                        tracking
                    </Paragraph>
                </div>
            </div>
            <Paragraph className={styles.paragraph}>
                Your data leaves this device
                <br />
                only when you choose to export or sync it.
            </Paragraph>
        </main>
    );
};

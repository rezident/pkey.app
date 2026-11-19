import { type FC, useState } from 'react';

import { Button } from '~/components/Button/Button.tsx';
import { Input } from '~/components/Input/Input.tsx';
import { OnboardingLayout } from '~/components/OnboardingLayout/OnboardingLayout.tsx';
import { Paragraph } from '~/components/Paragraph/Paragraph.tsx';
import { getNavigate } from '~/store/slices/navigation.ts';
import { useStore } from '~/store/useStore.ts';

import styles from './CreateVaultScreen.module.css';

export const CreateVaultScreen: FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useStore(getNavigate);

    return (
        <OnboardingLayout header="Create a new vault">
            <Paragraph className={styles.paragraph}>
                Choose a&nbsp;master password to&nbsp;encrypt your vault on&nbsp;this device.
            </Paragraph>
            <div className={styles.fields}>
                <Input
                    label="Master password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    label="Confirm master password"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className={styles.actions}>
                <Button disabled>Create vault</Button>
                <Button variant="secondary" onClick={() => navigate('WELCOME')}>
                    Back
                </Button>
            </div>
        </OnboardingLayout>
    );
};

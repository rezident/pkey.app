import { type FC, useState } from 'react';

import { Button } from '~/components/controls/Button/Button.tsx';
import { SecretInput } from '~/components/controls/SecretInput/SecretInput.tsx';
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
                <SecretInput
                    label="Master password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SecretInput
                    label="Confirm master password"
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

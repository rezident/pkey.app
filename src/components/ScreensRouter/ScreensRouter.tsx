import type { FC } from 'react';

import { CreateVaultScreen } from '~/components/CreateVaultScreen/CreateVaultScreen.tsx';
import { WelcomeScreen } from '~/components/WelcomeScreen/WelcomeScreen.tsx';
import { getStatus } from '~/store/slices/database.ts';
import { getScreen } from '~/store/slices/navigation.ts';
import { useStore } from '~/store/useStore.ts';

export const ScreensRouter: FC = () => {
    const screen = useStore(getScreen);
    const status = useStore(getStatus);

    if (status === 'NOT_CREATED') {
        switch (screen) {
            case 'CREATE_VAULT':
                return <CreateVaultScreen />;
            case 'WELCOME':
            case 'VAULT':
                return <WelcomeScreen />;

            default:
                throw new Error(screen satisfies never);
        }
    }

    return null;
};

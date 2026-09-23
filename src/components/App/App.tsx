import { useEffect } from 'react';

import { Loader } from '~/components/Loader/Loader';
import { VaultScreen } from '~/components/VaultScreen/VaultScreen';
import { WelcomeScreen } from '~/components/WelcomeScreen/WelcomeScreen';
import { getFetchStatus, getOperation, getStatus } from '~/store/slices/database';
import { useStore } from '~/store/useStore';

import './App.colors.css';
import './App.global.css';

export const App = () => {
    const fetchStatus = useStore(getFetchStatus);
    const status = useStore(getStatus);
    const operation = useStore(getOperation);
    console.log(status);

    useEffect(() => {
        fetchStatus();
    }, [fetchStatus]);

    return (
        <Loader isLoading={!status || operation === 'CHECKING'}>
            {status === 'NOT_CREATED' ? <WelcomeScreen /> : <VaultScreen />}
        </Loader>
    );
};

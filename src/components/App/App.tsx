import { useEffect } from 'react';

import { Loader } from '~/components/Loader/Loader';
import { ScreensRouter } from '~/components/ScreensRouter/ScreensRouter.tsx';
import { getFetchStatus, getOperation, getStatus } from '~/store/slices/database';
import { useStore } from '~/store/useStore';

import './App.colors.css';
import './App.global.css';

export const App = () => {
    const fetchStatus = useStore(getFetchStatus);
    const status = useStore(getStatus);
    const operation = useStore(getOperation);

    useEffect(() => {
        fetchStatus();
    }, [fetchStatus]);

    return (
        <Loader isLoading={!status || operation === 'CHECKING'}>
            <ScreensRouter />
        </Loader>
    );
};

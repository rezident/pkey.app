import { useEffect } from 'react';

import { BottomDock } from '~/components/BottomDock/BottomDock';
import { DetailPane } from '~/components/DetailPane/DetailPane';
import { Loader } from '~/components/Loader/Loader';
import { MainList } from '~/components/MainList/MainList';
import { getFetchStatus, getOperation, getStatus } from '~/store/slices/database';
import { useStore } from '~/store/useStore';

import styles from './App.module.css';

export const App = () => {
    const fetchStatus = useStore(getFetchStatus);
    const status = useStore(getStatus);
    const operation = useStore(getOperation);
    console.log(status);

    useEffect(() => {
        fetchStatus();
    }, [fetchStatus]);

    return (
        <div className={styles.root}>
            <Loader isLoading={!status || operation === 'CHECKING'}>
                <MainList />
                <DetailPane />
                <BottomDock />
            </Loader>
        </div>
    );
};

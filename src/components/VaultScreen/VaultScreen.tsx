import type { FC } from 'react';

import { BottomDock } from '~/components/BottomDock/BottomDock';
import { DetailPane } from '~/components/DetailPane/DetailPane';
import { MainList } from '~/components/MainList/MainList';

import styles from './VaultScreen.module.css';

export const VaultScreen: FC = () => {
    return (
        <div className={styles.root}>
            <MainList />
            <DetailPane />
            <BottomDock />
        </div>
    );
};

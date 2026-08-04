import { BottomDock } from '~/components/BottomDock/BottomDock';
import { DetailPane } from '~/components/DetailPane/DetailPane';
import { MainList } from '~/components/MainList/MainList';

import styles from './App.module.css';

export const App = () => (
    <div className={styles.root}>
        <MainList />
        <DetailPane />
        <BottomDock />
    </div>
);

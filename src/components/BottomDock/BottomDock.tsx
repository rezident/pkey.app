import styles from './BottomDock.module.css';

export const BottomDock = () => (
    <footer className={styles.root}>
        <div className={styles.content}>
            <div>Tags</div>
            <div>Search and add</div>
        </div>
    </footer>
);

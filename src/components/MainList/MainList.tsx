import styles from './MainList.module.css';

const secretNames = Array.from({ length: 50 }, (_, index) => `Secret ${index + 1}`);

export const MainList = () => (
    <main className={styles.root}>
        <header className={styles.header}>
            <div>
                <h1>pkey.app</h1>
                <p className={styles.eyebrow}>Updated: Jul 24 at 15:41</p>
            </div>
            <div>Cloud / Settings</div>
        </header>

        <ol className={styles.list}>
            {secretNames.map(secretName => (
                <li className={styles.item} key={secretName}>
                    {secretName}
                </li>
            ))}
        </ol>
    </main>
);

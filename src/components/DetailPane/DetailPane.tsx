import styles from './DetailPane.module.css';

const sectionNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

export const DetailPane = () => (
    <aside className={styles.root}>
        <header className={styles.header}>
            <h2>Secret details</h2>
            <p>Select a secret to view its contents.</p>
        </header>

        <div className={styles.content}>
            {sectionNumbers.map((sectionNumber) => (
                <section className={styles.section} key={sectionNumber}>
                    <h3>Section {sectionNumber}</h3>
                    <p>Placeholder content for the selected secret.</p>
                </section>
            ))}
        </div>
    </aside>
);

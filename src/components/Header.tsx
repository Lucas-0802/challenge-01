import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="../../rocket.svg" alt="Rocket" />
        <div className={styles.title}>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
    </header>
  );
};

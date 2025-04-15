import { Content } from "../components/Content";
import { Header } from "../components/Header";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Content />
    </div>
  );
};

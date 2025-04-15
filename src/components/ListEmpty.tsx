import styles from "./ListEmpty.module.css";

export const ListEmpty = () => {
  return (
    <div className={styles.listEmpty}>
      <img src="../../clipboard.svg" alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};

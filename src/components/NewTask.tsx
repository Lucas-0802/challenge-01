import styles from "./NewTask.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";

interface NewTaskProps {
  onCreatedNewTask: (taskTitle: string) => void;
}

export const NewTask = ({ onCreatedNewTask }: NewTaskProps) => {
  const [task, setTask] = useState<string>("");

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleNewTask = () => {
    if (task.trim() === "") {
      alert("O texto não pode estar vazio!");
      return;
    }

    onCreatedNewTask(task);
    setTask("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={task}
      />
      <button type="submit" onClick={handleNewTask}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
};

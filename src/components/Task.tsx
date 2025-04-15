import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export const Task = ({ id, title, isCompleted, onDeleteTask, onCompleteTask }: TaskProps) => {

    const handleDeleteComment = () => {
        onDeleteTask(id);
    };

    const handleCompleteTask = () => {
        onCompleteTask(id);
    };

  return (
    <div className={styles.task}>
      <input type="checkbox" id={id} onClick={handleCompleteTask} checked={isCompleted} />
      <label htmlFor={id} className={isCompleted ? styles.completed : ""}>
        {title}
      </label>
      <button onClick={handleDeleteComment}>
        <Trash size={20} />
      </button>
    </div>
  );
};

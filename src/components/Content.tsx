import { useState } from "react";
import styles from "./Content.module.css";
import { ListEmpty } from "./ListEmpty";
import { NewTask } from "./NewTask";
import { Task, TaskProps } from "./Task";

export const Content = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [createdTasks, setCreatedTasks] = useState(0);

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    const completedCount = updatedTasks.filter((task) => task.isCompleted).length;
    setCompletedTasks(completedCount);
    setCreatedTasks((prevCount) => prevCount - 1);
  };

  const completeTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
    const completedCount = updatedTasks.filter((task) => task.isCompleted).length;
    setCompletedTasks(completedCount);
  };

  const createNewTask = (taskTitle: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
      onDeleteTask: deleteTask,
      onCompleteTask: completeTask,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setCreatedTasks((prevCount) => prevCount + 1);
  };

  return (
    <main className={styles.content}>
      <NewTask onCreatedNewTask={createNewTask} />

      <div className={styles.tasks}>
        <div className={styles.tasksHeader}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span className={styles.count}>{createdTasks}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span className={styles.count}>{completedTasks}</span>
          </div>
        </div>

        <div className={styles.tasksList}>
          {tasks.length === 0 ? (
            <ListEmpty />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

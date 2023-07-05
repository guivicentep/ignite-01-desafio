import { NoTasks } from './NoTasks';
import { IndividualTask } from './IndividualTask';

import styles from './Tasks.module.css';
import { Todo } from './Todo';
import { useState } from 'react';

export interface TaskType {
  id: number;
  task: string;
  completed: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const amountOfTasks = tasks.length;
  const amountOfTasksCompleted = tasks.filter((task) => task.completed).length;

  function handleCreateTask(newTask: string) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: newTask,
        completed: false,
      },
    ]);
  }

  function handleDelete(taskToDelete: number) {
    const taskWithouDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(taskWithouDeletedOne);
  }

  function handleCheck(taskToUnched: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskToUnched) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  return (
    <>
      <Todo onCreateTask={handleCreateTask} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasksNumbers}>
            <span className={styles.tasksCreated}>
              Tarefas Criadas{' '}
              <span className={styles.tasksCreatedAmount}>{amountOfTasks}</span>
            </span>
            <span className={styles.tasksDone}>
              Concluídas{' '}
              <span
                className={styles.tasksDoneAmount}
              >{`${amountOfTasksCompleted} de ${amountOfTasks}`}</span>
            </span>
          </div>

          <div className={styles.wrapperIndividualTask}>
            {tasks.length === 0 ? (
              <NoTasks />
            ) : (
              tasks.map((task) => {
                return (
                  <IndividualTask
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                    onCheck={handleCheck}
                    onDelete={handleDelete}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

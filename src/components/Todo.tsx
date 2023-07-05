import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Todo.module.css';

interface TasksProps {
  onCreateTask: (newTask: string) => void;
}

export function Todo({ onCreateTask }: TasksProps) {
  const [newTask, setNewTask] = useState('');
  const isNewTaskEmpty = newTask.length === 0;

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask(newTask);

    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite uma Task antes de Criar!');
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleCreateTask} className={styles.todoForm}>
        <input
          type='text'
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewCommentInvalid}
          placeholder='Adicione uma nova tarefa'
          required
        />
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={22} weight={'bold'} />
        </button>
      </form>
    </div>
  );
}

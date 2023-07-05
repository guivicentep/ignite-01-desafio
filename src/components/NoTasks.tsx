import styles from './NoTasks.module.css';

import Clipboard from '../assets/clipboard.svg';

export function NoTasks() {
  return (
    <div className={styles.wrapper}>
      <img src={Clipboard} alt='Clipboard' />
      <p className={styles.noTaskText}>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}

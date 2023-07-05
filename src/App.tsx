import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Tasks />
    </div>
  );
}

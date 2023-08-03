import styles from './App.module.css';
import { Header } from './components/Header';
import './global.css';
export function App() {
  return (
    <>
      <Header />
      <h1 className={styles.wrapper}>TO DO LIST</h1>
    </>
  );
}

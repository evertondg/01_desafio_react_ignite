import todoLogo from '../assets/rocketlogo.svg';
import styles from './Header.module.css';
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={todoLogo} alt='' />
        <div>
          to<span>do</span>
        </div>
      </div>
    </header>
  );
}

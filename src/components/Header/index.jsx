
import styles from './styles.module.scss'

export default function Header() {
  return (  
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Virgínia Grijp</h1>
        <p>Advogada e Mediadora extrajudicial</p>
      </div>
      <nav className={styles.navegation}>
        <ul>
          <li className={styles.active}>Sessão 1</li>
          <li>Sessão 2</li>
          <li>Sessão 3</li>
        </ul>
      </nav>
    </header>
  )
}
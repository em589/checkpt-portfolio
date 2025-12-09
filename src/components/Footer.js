import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Emna MAHDHI. Tous droits réservés.</p>
      <div className={styles.socialIcons}>
        <a href="https://github.com/em589/" target="_blank" rel="noreferrer">🐱</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">🔗</a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">🐦</a>
      </div>
    </footer>
  )
}

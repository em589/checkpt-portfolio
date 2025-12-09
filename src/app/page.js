import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Bonjour, je suis <span className={styles.highlight}>Emna MAHDHI</span>
              </h1>
              <h2 className={styles.heroSubtitle}>
                Étudiante en Software Development Bootcamp with AI skills
              </h2>
              <p className={styles.heroDescription}>
                Passionnée par l'analyse de données et les technologies intelligentes, 
                je me distingue par ma rigueur et mon esprit analytique.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/projects" className="btn">
                  Voir mes projets
                </Link>
                <Link href="/contact" className={`btn ${styles.btnSecondary}`}>
                  Me contacter
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <img 
                  src="/images/image.jpg" 
                  alt="Emna MAHDHI"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <h2 className="section-title">Compétences Clés</h2>
          <div className={styles.skillsGrid}>
            <div className="card">
              <h3>💻 Développement Web</h3>
              <p>React, Angular, Node.js, Next.js, MongoDB</p>
            </div>
            
            <div className="card">
              <h3>🔧 Autres Tech</h3>
              <p>C++, C#, Flutter, PHP, Symfony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>5+</h3>
              <p className={styles.statLabel}>Projets Réalisés</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>4</h3>
              <p className={styles.statLabel}>Stages Professionnels</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>6+</h3>
              <p className={styles.statLabel}>Certifications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

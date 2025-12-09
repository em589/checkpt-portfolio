import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.contactHero}>
        <h1 className={styles.pageTitle}>Contactez-moi</h1>
        <p className={styles.pageSubtitle}>Vous pouvez me joindre via le formulaire ci-dessous ou par mes réseaux sociaux.</p>
      </section>

      <div className={`container ${styles.contactGrid}`}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Mes coordonnées</h2>
          <p className={styles.infoDescription}>Je suis disponible pour des projets, stages ou collaborations.</p>
          <div className={styles.infoCards}>
            <a className={styles.infoCard}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h3>Email</h3>
                <p>emna52423805@gmail.com</p>
              </div>
            </a>
            <a className={styles.infoCard}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <h3>Téléphone</h3>
                <p>+216 29096451</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>Envoyez-moi un message</h2>
          <div className={styles.formGroup}>
            <label>Nom</label>
            <input type="text" placeholder="Votre nom"/>
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Votre email"/>
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea placeholder="Votre message"></textarea>
          </div>
          <button className="btn">Envoyer</button>
        </div>
      </div>
    </div>
  )
}

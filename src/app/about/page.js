import styles from './about.module.css'

export const metadata = {
  title: 'À Propos - Emna MAHDHI',
  description: 'En savoir plus sur mon parcours et mes compétences',
}

export default function About() {
  const education = [
    {
      degree: "Formation en  Software Development Bootcamp with AI skills",
      school: "Tataouine Hackerspace ",
      period: "2025 - En cours",
      location: "Tataouine"
    },
     {
      degree: "Master en valorisation de bio ressources vegetale",
      school: "Institut Supérieur de biologie appliquée, Medenine",
      period: "2021 - 2022",
      location: "Medenine"
    },
    {
      degree: "Licence en controle qualite de produits alimentaires et hygiene",
      school: "Institut Supérieur de biologie appliquée, Medenine",
      period: "2019 - 2020",
      location: "Medenine"
    },
    {
      degree: "Baccalauréat",
      school: "Lycée Ghomrassen",
      period: "09/2019 - 06/2020",
      location: "Tataouine"
    }
  ]

  const experience = [

    {
      title: "Une année d'expérience dans le domaine sociatif",
      
      period: "2024- 2025",
      
    },
    {
      title: "Participation à l'Organisation et au suivi des elections ",
      
      period: "Octobre 2024",
      
    },
    {
      title: "Stage memoire",
      company: "Industrie agroalimentaires Gourmandise, Sfax",
      period: "2021 - 2022",
      description:"Valorisation de l'eleusine : Developpement d'un noveau produit de patisserie destine destiné pour les diabitiques"
    },
    {
      title: "Stage projet fin d'etude PFE",
      company: "laboratoire d'amelioration et valorisation des vegetaux de l'ISBM",
      period: "2019 -2020",
      description: "Etude phytochimique et evaluation sensorielle de tisane à base de Cistus clusii Dun"
    }
  ]

  // const certifications = [
  //   {
  //     name: "CCNA: Switching, Routing, and Wireless Essentials",
  //     issuer: "CISCO",
  //     icon: "🌐"
  //   },
  //   {
  //     name: "Introduction to Cybersecurity",
  //     issuer: "CISCO",
  //     icon: "🔒"
  //   },
  //   {
  //     name: "CyberOps Associate",
  //     issuer: "CISCO",
  //     icon: "🛡️"
  //   },
  //   {
  //     name: "IT Specialist - Python",
  //     issuer: "Certiport",
  //     icon: "🐍"
  //   }
  // ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>À Propos de Moi</h1>
          <p className={styles.pageSubtitle}>
            Découvrez mon parcours, mes compétences et mes certifications
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className={styles.introCard}>
            <h2>Qui suis-je ?</h2>
            <p>
             Titulaire d'une Licence en Contrôle Qualité des Produits Alimentaires et Hygiène et d’un Master en Valorisation des Bio-Ressources Végétales, je possède une solide expertise dans la qualité et les bio-ressources. Actuellement en formation intensive “Software Development Bootcamp with AI Skills”, je développe des compétences en développement logiciel et IA pour combiner sciences, innovation et digitalisation.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`section ${styles.educationSection}`}>
        <div className="container">
          <h2 className="section-title">🎓 Éducation et Formation</h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <p className={styles.period}>{edu.period}</p>
                  <p className={styles.location}>📍 {edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">💼 Expérience Professionnelle</h2>
          <div className={styles.experienceGrid}>
            {experience.map((exp, index) => (
              <div key={index} className="card">
                <h3>{exp.title}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className={`section ${styles.certificationsSection}`}>
        <div className="container">
          <h2 className="section-title">📜 Certifications</h2>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <div className={styles.certIcon}>{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">🛠️ Compétences Techniques</h2>
          <div className={styles.skillsContainer}>
            <div className="card">
              <h3>Langages de Programmation</h3>
              <div className={styles.skillTags}>
                <span>Python</span>
                <span>JavaScript</span>
                
                <span>HTML/CSS</span>
                
              </div>
            </div>
            <div className="card">
              <h3>Frameworks & Libraries</h3>
              <div className={styles.skillTags}>
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                
              </div>
            </div>
            <div className="card">
              <h3>Big Data & Bases de Données</h3>
              <div className={styles.skillTags}>
                
                <span>Hadoop</span>
                <span>HBase</span>
                <span>MongoDB</span>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

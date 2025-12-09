import ProjectCard from '@/components/ProjectCard'
import styles from './projects.module.css'

export const metadata = {
  title: 'Projets - Emna MAHDHI',
  description: 'Découvrez mes projets en développement web ',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "👥 User List App — React + Axios",
      description: "Une application React simple qui récupère et affiche des utilisateurs depuis l'API JSONPlaceholder.l'interface est propre, responsive et organisée sous forme de cartes.",
      technologies: [ "React", "JavaScript", "CSS", "AXIOS"],
      image: "/images/project1.jpg",
      year: "2025",
      category: "Web Development"
    },
    {
      id: 2,
      title: "🎬 My Favorite Movies App",
      description: "Une application React simple et élégante pour afficher, filtrer et ajouter vos films ou séries préférés, utilisant les React Hooks (useState) et une architecture par composants.",
      technologies: ["JavaScript(ES6)", "CSS", "HTML", "React.js"],
      image: "public/images/image1.PNG",
      year: "2025",
      category: "Web Developpent"
    },
    {
      id: 3,
      title: "Plateforme de  Cartier Boutique 💎",
      description: "Une application React simple mettant en valeur une collection de bijoux de luxe. Elle présente un design élégant grâce à React-Bootstrap et des cartes produits interactives.",
      technologies: ["React", "React-bootstrap", "CSS", ],
      image: "public/images/image.PNG",
      year: "2025",
      category: "Web Development"
    },
    {
      id: 4,
      title: "📝 React Redux Todo App",
      description: "Une application de gestion de tâches moderne et élégante construite avec React et Redux, offrant une expérience utilisateur fluide et intuitive.",
      technologies: ["React", "Redux", "JavaScript", "CSS"],
      image: "/images/project4.jpg",
      year: "2025",
      category: "Web Development"
    },
   
    
  ]

  const categories = ["Tous", "Web Development"]

  return (
    <div className={styles.projectsPage}>
      {/* Hero Section */}
      <section className={styles.projectsHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Mes Projets</h1>
          <p className={styles.pageSubtitle}>
            Découvrez mes réalisations en développement web 
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Intéressé par mon travail ?</h2>
            <p>N hésitez pas à me contacter pour discuter de vos projets</p>
            <a href="/contact" className="btn">Me Contacter</a>
          </div>
        </div>
      </section>
    </div>
  )
}
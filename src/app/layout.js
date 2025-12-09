import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Emna MAHDHI - Software developer',
  description: 'Portfolio de Emna MAHDHI - Étudiante ingénieure en Software developer et Intelligence Artificielle',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
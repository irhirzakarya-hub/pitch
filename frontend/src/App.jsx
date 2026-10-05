import { motion, useScroll, useTransform } from 'framer-motion';
import { PieChart, User, Lightbulb, Cog, AlertCircle, Camera, Rocket } from 'lucide-react';
import './index.css';

const slides = [
  {
    id: 1,
    icon: <PieChart size={48} color="#ef4444" />,
    title: "Les Chiffres",
    text: (
      <>
        <span className="highlight-red text-4xl">77%</span> des PME marocaines ne sont pas digitalisées.<br /><br />
        Pire encore, <strong>77%</strong> d'entre elles n'utilisent pas du tout <strong>l'Intelligence Artificielle</strong>.
        <br /><br />
        <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          *Source : Selon une donnée citée par Claro Digital et attribuée au HCP (Haut-Commissariat au Plan).
          <br /><br />
          <strong>Le vrai problème :</strong> Elles veulent évoluer, mais ne savent pas par où commencer ni quelle solution adopter.
        </span>
      </>
    ),
    imageUrl: "/slide1.png",
    imageAlt: "Statistiques (HCP)",
    linkUrl: "https://clarodigi.com/blog/maroc-digital-2030-opportunites-pme/",
    linkText: "🔗 Voir les statistiques",
    theme: "red"
  },
  {
    id: 2,
    icon: <User size={48} color="#6366f1" />,
    title: "Qui suis-je ?",
    text: (
      <>
        Bonjour, je suis <span className="highlight" style={{ fontSize: '2.5rem' }}>Zakaria Aghir</span>,<br />
        un jeune développeur de 22 ans, diplômé en <strong>développement digital</strong>.
        <br /><br />
        <span className="highlight-gold">Expériences :</span><br />
        • FlexiApps & L'association REMESS.<br />
        • Projets Freelance (Coopératives, associations, entreprises et entrepreneurs).
      </>
    ),
    imageUrl: "/slide2.png",
    imageAlt: "Portrait de Zakaria",
    linkUrl: "",
    linkText: "",
    theme: "blue"
  },
  {
    id: 3,
    icon: <Lightbulb size={48} color="#34d399" />,
    title: "L'Idée du Projet",
    text: (
      <>
        Ce parcours m'a permis de détecter un <strong>besoin réel</strong> sur le marché.<br /><br />
        <span className="highlight-green">Ma vision :</span> Bâtir un <strong>véritable partenaire digital</strong> pour les entreprises.
        <br /><br />
        Pas une simple agence qui vend un site web, mais un partenaire stratégique de confiance.
      </>
    ),
    imageUrl: "/slide3.jpg",
    imageAlt: "Idée du Projet",
    linkUrl: "",
    linkText: "",
    theme: "green"
  },
  {
    id: 4,
    icon: <Cog size={48} color="#a855f7" />,
    title: "L'Approche & La Valeur",
    text: (
      <>
        Une approche simple mais efficace :<br /><br />
        1️⃣ <strong>Analyse :</strong> Comprendre le vrai problème et auditer les processus (temps/coûts).<br />
        2️⃣ <strong>Solution Adaptée :</strong> Automatisation, Application sur-mesure ou I.A.<br />
        <br />
        <span className="highlight-gold" style={{ fontSize: '1.4rem' }}>
          Notre point fort : Nous ne vendons pas qu'un outil, nous visons le RÉSULTAT avec un suivi continu.
        </span>
      </>
    ),
    imageUrl: "/slide4.jpg",
    imageAlt: "Méthodologie",
    linkUrl: "",
    linkText: "",
    theme: "purple"
  },
  {
    id: 5,
    icon: <AlertCircle size={48} color="#fb923c" />,
    title: "Le Grand Obstacle",
    text: (
      <>
        Aujourd'hui, un <strong className="highlight-red">seul grand obstacle</strong> freine mon évolution : <strong>Le Matériel</strong>.
        <br /><br />
        💻 <strong>PC très faible :</strong> Une tâche d'une semaine me prend 8 à 9 jours.<br />
        🎥 <strong>Caméra de mauvaise qualité :</strong> M'empêche de créer du contenu professionnel pour mon <em>Personal Branding</em>.
      </>
    ),
    imageUrl: "/slide5.jpg",
    imageAlt: "Matériel Actuel",
    linkUrl: "",
    linkText: "",
    theme: "orange"
  },

  {
    id: 7,
    icon: <Rocket size={48} color="#e879f9" />,
    title: "La Vision (Pourquoi ?)",
    text: (
      <>
        Ce financement n'est pas une dépense, c'est un <strong>accélérateur</strong>.<br />
        Il va me permettre de :<br />
        🚀 Exécuter le travail beaucoup plus rapidement.<br />
        🎯 Me concentrer sur l'essentiel : <strong>l'acquisition de clients</strong>.<br />
        🌟 Aider encore plus d'entreprises marocaines à se digitaliser.
        <br /><br />
        <strong style={{ fontSize: '2.5rem', color: 'white' }}>Merci de votre attention.</strong>
      </>
    ),
    imageUrl: "/slide6.jpg",
    imageAlt: "Vision & Succès",
    linkUrl: "",
    linkText: "",
    theme: "pink"
  }
];

function App() {
  return (
    <>
      <div className="bg-blobs">
        <motion.div animate={{ x: [0, 50, 0], y: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 10 }} className="blob blob-1" />
        <motion.div animate={{ x: [0, -50, 0], y: [0, -50, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="blob blob-2" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 12 }} className="blob blob-3" />
      </div>

      <div className="App">
        {slides.map((slide, index) => (
          <section key={slide.id} className="slide">

            <motion.div
              className={`glass-card theme-${slide.theme} slide-layout`}
              initial={{ opacity: 0, y: 100, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >

              {/* Content Side */}
              <div className="content-side" dir="ltr">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="icon-wrapper"
                >
                  {slide.icon}
                </motion.div>

                <h2 className="title-gradient">{slide.title}</h2>
                <p className="description">
                  {slide.text}
                </p>
              </div>

              {/* Image Side */}
              <motion.div
                className="image-side"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div className="image-container" whileHover={{ scale: 1.05, rotateY: 10 }}>
                  <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt}
                    className="slide-image"
                  />

                  {/* Placeholder removed */}
                </motion.div>

                {slide.linkUrl && (
                  <motion.a
                    href={slide.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="image-link"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {slide.linkText || '🔗 Lien'}
                  </motion.a>
                )}

              </motion.div>

            </motion.div>

            {index < slides.length - 1 && (
              <motion.div
                className="scroll-down"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ↓
              </motion.div>
            )}

          </section>
        ))}
      </div>
    </>
  );
}

export default App;

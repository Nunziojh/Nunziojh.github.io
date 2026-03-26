// 📝 PERSONALIZZA QUESTI DATI CON LE TUE INFORMAZIONI

export const portfolioData = {
  // PROFILO PERSONALE
  profile: {
    name: "Nunzio Messineo",
    title: "Machine Learning Engineer",
    subtitle: "Specializzato in Deep Learning e AI Solutions",
    bio: "Appassionato di machine learning e intelligenza artificiale. Sviluppo modelli predittivi avanzati e soluzioni AI scalabili. Con 4+ anni di esperienza nel settore tech, ho lavorato su progetti di NLP, Computer Vision e sistemi di recommendation.",
    image: "public\chicago_rooftop.jpg", // Cambia con tua foto
  },

  // INFORMAZIONI DI CONTATTO
  contact: {
    email: "nunziomessineo7@email.com",
    phone: "+39 3458785045",
    linkedin: "https://www.linkedin.com/in/nunzio-messineo-7a42862b8/",
    github: "https://github.com/Nunziojh",
    portfolio: "https://nunziojh.github.io/", // Opzionale
  },

  // ESPERIENZE LAVORATIVE
  experiences: [
    {
      id: 1,
      company: "Tech Innovation AI",
      position: "Senior ML Engineer",
      period: "Gennaio 2023 - Presente",
      description:
        "Sviluppo di modelli di deep learning per computer vision e NLP. Leadership tecnica su team di 3 ML engineers. Implementazione di pipelines ML in produzione con MLOps best practices. Hanno ridotto latenza di 40% in modelli di inference.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "AWS"],
    },
    {
      id: 2,
      company: "DataScience Solutions",
      position: "ML Engineer",
      period: "Giugno 2021 - Dicembre 2022",
      description:
        "Sviluppo di sistemi di recommendation per piattaforma e-commerce. Feature engineering e model optimization. A/B testing e monitoraggio modelli in produzione. Miglioramento accuracy da 0.82 a 0.91.",
      technologies: ["Python", "Scikit-learn", "PostgreSQL", "FastAPI", "MLflow"],
    },
    {
      id: 3,
      company: "Startup DataDriven",
      position: "Junior Data Scientist",
      period: "Marzo 2020 - Maggio 2021",
      description:
        "Analisi dati e creazione di report. Supporto nel preprocessing dei dati e feature engineering. Sviluppo di modelli classici e introduzione a deep learning.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "SQL"],
    },
  ],

  // COMPETENZE TECNICHE
  skills: {
    "Machine Learning": [
      "Deep Learning",
      "NLP (Natural Language Processing)",
      "Computer Vision",
      "Recommendation Systems",
      "Time Series",
      "Anomaly Detection",
    ],
    "Linguaggi & Framework": [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "Keras",
    ],
    "Data & Databases": [
      "Pandas",
      "NumPy",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Data Pipelines",
    ],
    "MLOps & DevOps": [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "MLflow",
      "Model Serving",
    ],
    "Tools & Altro": [
      "Git",
      "Jupyter",
      "Linux",
      "Statistical Analysis",
      "Data Visualization",
      "Agile",
    ],
  },

  // PROGETTI PRINCIPALI (OPZIONALE - Puoi mostrare progetti ML importanti)
  projects: [
    {
      id: 1,
      title: "Sentiment Analysis API",
      description: "Sistema di analisi del sentiment in real-time usando BERT. Processamento di 10k+ testi al giorno.",
      tags: ["NLP", "BERT", "FastAPI", "Production"],
      link: "https://github.com/tuonome/sentiment-api",
    },
    {
      id: 2,
      title: "Image Classification Model",
      description: "Modello CNN per classificazione di immagini mediche. Accuracy 96% su dataset test con 5k+ immagini.",
      tags: ["Computer Vision", "PyTorch", "CNN", "Medical AI"],
      link: "https://github.com/tuonome/medical-imaging",
    },
    {
      id: 3,
      title: "Recommendation Engine",
      description: "Sistema di recommendation collaborative filtering per e-commerce. Aumentato CTR del 35%.",
      tags: ["RecSys", "Collaborative Filtering", "Python", "Production"],
      link: "https://github.com/tuonome/recsys",
    },
  ],

  // CERTIFICAZIONI (OPZIONALE)
  certifications: [
    "TensorFlow Developer Certificate",
    "AWS Machine Learning Specialty",
    "Deep Learning Specialization (Coursera)",
  ],
};

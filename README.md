# 🚀 ML Portfolio React - Guida Completa

## 📋 File Creati

```
ml-portfolio/
├── MLPortfolio.jsx          # ⭐ Componente principale (personalizza QUI)
├── portfolio-data.js         # ⭐ Tuoi dati personali (personalizza QUI)
├── App.jsx                   # Componente radice
├── main.jsx                  # Entry point React
├── index.html                # HTML principale
├── App.css                   # Stili CSS
├── package.json              # Dipendenze
├── vite.config.js            # Configurazione Vite
└── README.md                 # Questo file
```

---

## 🎨 STEP 1: Personalizza il Contenuto

### 1️⃣ Modifica `portfolio-data.js`

Apri questo file e personalizza con i tuoi dati:

```javascript
export const portfolioData = {
  profile: {
    name: "Il Tuo Nome",
    title: "Machine Learning Engineer",
    subtitle: "La tua specializzazione",
    bio: "La tua descrizione personale...",
    image: "URL della tua foto", // Es: https://via.placeholder.com/200
  },

  contact: {
    email: "tua.email@email.com",
    phone: "+39 123 456 7890",
    linkedin: "https://linkedin.com/in/tuonome",
    github: "https://github.com/tuonome",
    portfolio: "https://www.tuoportfolio.com", // Opzionale
  },

  experiences: [
    // Modifica le 2-3 esperienze
    {
      id: 1,
      company: "Nome Azienda",
      position: "Il Tuo Ruolo",
      period: "Quando - Quando",
      description: "Cosa hai fatto...",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    // ...
  ],

  skills: {
    "Machine Learning": ["Deep Learning", "NLP", ...],
    "Linguaggi & Framework": ["Python", "PyTorch", ...],
    // ... altre categorie
  },

  projects: [
    // Opzionale: aggiungi i tuoi progetti
    {
      id: 1,
      title: "Nome Progetto",
      description: "Breve descrizione...",
      tags: ["Tag1", "Tag2"],
      link: "https://github.com/...",
    },
  ],

  certifications: [
    "Certificazione 1",
    "Certificazione 2",
  ],
};
```

### 2️⃣ (Opzionale) Personalizza Stili

In `MLPortfolio.jsx`, modifica i colori nella sezione `const styles`:

```javascript
// Cambia i colori principali
--primary: "#1e3a8a",        // Blu scuro
--accent: "#3b82f6",         // Blu acceso
--light: "#f8fafc",          // Bianco/grigio chiaro
```

---

## 💻 STEP 2: Installa e Testa Localmente

### Prerequisiti
- **Node.js** installato ([scarica qui](https://nodejs.org))
- Un editor di testo (VS Code consigliato)

### Comandi

```bash
# 1. Scarica i file e posizionati nella cartella
cd ml-portfolio

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm run dev

# 4. Apri nel browser
# http://localhost:5173
```

Quando vedi "Local: http://localhost:5173", il portfolio è live! ✅

### Ferma il server
```bash
CTRL + C
```

---

## 🌐 STEP 3: Prepara il Deploy

### Build per Produzione

```bash
npm run build
```

Questo crea una cartella `dist/` con il portfolio ottimizzato.

---

## 🚀 STEP 4: Hostarlo GRATIS

### **OPZIONE A: GitHub Pages** (⭐ CONSIGLIATA)

1. **Crea repository GitHub** con nome `tuonome.github.io`

2. **Carica i file:**
   - Carica TUTTO il contenuto della cartella `dist/` (dopo il build)
   - La struttura deve essere:
     ```
     index.html
     assets/
       ├── ...
     ```

3. **Aspetta 2-3 minuti** e visita:
   ```
   https://tuonome.github.io
   ```

4. **(Opzionale) Dominio personalizzato:**
   - Compra dominio su [Freenom](https://www.freenom.com) (gratis: `.ml`, `.tk`, `.ga`)
   - Settings repository GitHub Pages → Custom domain
   - Aggiungi i DNS (istruzioni su Freenom)

---

### **OPZIONE B: Netlify** (Più facile)

1. Vai su [netlify.com](https://www.netlify.com)
2. Signup con GitHub
3. Seleziona il repository
4. Netlify build automaticamente
5. Ricevi dominio gratuito: `random.netlify.app`

---

### **OPZIONE C: Vercel** (Anche più moderno)

1. Vai su [vercel.com](https://vercel.com)
2. Signup con GitHub
3. Import repository
4. Deploy automatico
5. Dominio: `project.vercel.app`

---

## 🔧 Comandi Utili

```bash
# Installa dipendenze
npm install

# Sviluppo locale
npm run dev

# Build per produzione
npm run build

# Anteprima build locale
npm run preview
```

---

## 📸 Aggiungere Foto Profilo

### Opzione 1: URL online (più semplice)
```javascript
image: "https://via.placeholder.com/200?text=Foto"
// Oppure carica su imgur.com e copia il link
```

### Opzione 2: File locale
1. Crea cartella `public/` nella root
2. Metti la foto: `public/profile.jpg`
3. In `portfolio-data.js`:
```javascript
image: "/profile.jpg"
```

---

## 🎨 Personalizzazioni Avanzate

### Cambio Colori Globali
In `MLPortfolio.jsx`, modifica all'inizio della sezione `const styles`:

```javascript
// Colori principali
primary: "#1e3a8a",      // Blu scuro
accent: "#3b82f6",       // Blu acceso
light: "#f8fafc",        // Sfondo chiaro
```

### Aggiungere Animazioni
```javascript
// Nel tuo stile card:
transition: "all 0.3s ease"
transform: "translateY(-5px)" // Hover effect
```

### Aggiungere Sezioni Nuove
```javascript
// In MLPortfolio.jsx, aggiungi una nuova sezione:
<section id="mycustomsection" style={styles.section}>
  {/* Contenuto */}
</section>
```

---

## 📝 Checklist Prima di Pubblicare

- [ ] Nome e foto aggiornati
- [ ] Descrizione personale completata
- [ ] Esperienze lavorative corrette
- [ ] Skills aggiornati
- [ ] Email e link contatti verificati
- [ ] Build eseguito (`npm run build`)
- [ ] Deploy fatto (GitHub/Netlify/Vercel)
- [ ] Portfolio accessible online ✅

---

## ❓ Troubleshooting

### "npm command not found"
→ Installa [Node.js](https://nodejs.org)

### Porta 5173 già in uso
```bash
npm run dev -- --port 3000  # Usa porta diversa
```

### Build fallisce
```bash
rm -rf node_modules
npm install
npm run build
```

### GitHub Pages non mostra il sito
- Verifica che il repository sia pubblico
- Aspetta 3-5 minuti
- Controlla che i file siano in `dist/`

---

## 🆘 Hai Bisogno di Aiuto?

1. **Errori React**: Controlla la console del browser (F12)
2. **Errori Build**: Leggi il messaggio di errore completo
3. **Deploy non funziona**: Assicurati di fare il `build` prima

---

## 🎉 Congratulazioni!

Il tuo portfolio ML Engineer è online! 🚀

Prossimi step:
- Condividi su LinkedIn
- Aggiorna con nuovi progetti
- Mantieni skills aggiornate


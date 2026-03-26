import React, { useState } from "react";
import { portfolioData } from "./portfolio-data";

export default function MLPortfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.container}>
      {/* HEADER / NAVBAR */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>{portfolioData.profile.name}</div>
          <ul style={styles.navMenu}>
            <li>
              <button style={styles.navLink} onClick={() => scrollToSection("home")}>
                Home
              </button>
            </li>
            <li>
              <button style={styles.navLink} onClick={() => scrollToSection("experience")}>
                Esperienze
              </button>
            </li>
            <li>
              <button style={styles.navLink} onClick={() => scrollToSection("skills")}>
                Skills
              </button>
            </li>
            {portfolioData.projects && portfolioData.projects.length > 0 && (
              <li>
                <button style={styles.navLink} onClick={() => scrollToSection("projects")}>
                  Progetti
                </button>
              </li>
            )}
            <li>
              <button style={styles.navLink} onClick={() => scrollToSection("contact")}>
                Contatti
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <img
            src={portfolioData.profile.image}
            alt={portfolioData.profile.name}
            style={styles.profileImage}
          />
          <h1 style={styles.heroTitle}>{portfolioData.profile.name}</h1>
          <p style={styles.heroSubtitle}>{portfolioData.profile.title}</p>
          <p style={styles.heroDescription}>{portfolioData.profile.subtitle}</p>
          <p style={styles.heroBio}>{portfolioData.profile.bio}</p>
          <button
            style={styles.ctaButton}
            onClick={() => scrollToSection("contact")}
            onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            Contattami
          </button>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Esperienze Lavorative</h2>
          <div style={styles.experienceGrid}>
            {portfolioData.experiences.map((exp, index) => (
              <div
                key={exp.id}
                style={styles.experienceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(29, 78, 216, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div style={styles.expHeader}>
                  <h3 style={styles.expCompany}>{exp.company}</h3>
                  <span style={styles.expPeriod}>{exp.period}</span>
                </div>
                <p style={styles.expPosition}>{exp.position}</p>
                <p style={styles.expDescription}>{exp.description}</p>
                <div style={styles.techStack}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} style={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Competenze Tecniche</h2>
          <div style={styles.skillsGrid}>
            {Object.entries(portfolioData.skills).map(([category, skillList]) => (
              <div key={category} style={styles.skillCategory}>
                <h3 style={styles.skillCategoryTitle}>{category}</h3>
                <div style={styles.skillTags}>
                  {skillList.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      {portfolioData.projects && portfolioData.projects.length > 0 && (
        <section id="projects" style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Progetti Principali</h2>
            <div style={styles.projectsGrid}>
              {portfolioData.projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.projectCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(29, 78, 216, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p style={styles.projectLink}>Vedi su GitHub →</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionContent}>
          <h2 style={{ ...styles.sectionTitle, color: "white" }}>Contattami</h2>
          <p style={styles.contactDescription}>
            Sono sempre interessato a nuovi progetti e opportunità di collaborazione.
            Contattami pure!
          </p>

          <div style={styles.contactGrid}>
            {portfolioData.contact.email && (
              <div style={styles.contactItem}>
                <h4 style={styles.contactLabel}>📧 Email</h4>
                <a href={`mailto:${portfolioData.contact.email}`} style={styles.contactLink}>
                  {portfolioData.contact.email}
                </a>
              </div>
            )}

            {portfolioData.contact.phone && (
              <div style={styles.contactItem}>
                <h4 style={styles.contactLabel}>📱 Telefono</h4>
                <a href={`tel:${portfolioData.contact.phone}`} style={styles.contactLink}>
                  {portfolioData.contact.phone}
                </a>
              </div>
            )}

            {portfolioData.contact.linkedin && (
              <div style={styles.contactItem}>
                <h4 style={styles.contactLabel}>💼 LinkedIn</h4>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactLink}
                >
                  Profilo LinkedIn
                </a>
              </div>
            )}

            {portfolioData.contact.github && (
              <div style={styles.contactItem}>
                <h4 style={styles.contactLabel}>🐙 GitHub</h4>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactLink}
                >
                  Profilo GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>&copy; 2024 {portfolioData.profile.name}. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

// 🎨 STILI - Personalizza colori e spacing qui
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    lineHeight: "1.6",
  },

  // HEADER
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #e2e8f0",
    zIndex: 1000,
    padding: "1rem 2rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  },

  nav: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e3a8a",
    textDecoration: "none",
  },

  navMenu: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },

  navLink: {
    background: "none",
    border: "none",
    color: "#0f172a",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.3s ease",
    fontSize: "1rem",
    padding: 0,
  },

  // HERO SECTION
  hero: {
    marginTop: "70px",
    minHeight: "90vh",
    background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "2rem",
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.1) 0%, transparent 50%)",
    pointerEvents: "none",
  },

  heroContent: {
    textAlign: "center",
    zIndex: 1,
    maxWidth: "700px",
  },

  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "4px solid white",
    marginBottom: "2rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    objectFit: "cover",
  },

  heroTitle: {
    fontSize: "3.5rem",
    marginBottom: "0.5rem",
    fontWeight: "700",
    letterSpacing: "-1px",
  },

  heroSubtitle: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    opacity: 0.95,
    fontWeight: "600",
  },

  heroDescription: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    opacity: 0.85,
  },

  heroBio: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    opacity: 0.85,
    lineHeight: "1.8",
  },

  ctaButton: {
    display: "inline-block",
    padding: "1rem 2.5rem",
    background: "white",
    color: "#1e3a8a",
    border: "none",
    borderRadius: "50px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  // SECTIONS
  section: {
    padding: "5rem 2rem",
    backgroundColor: "#f8fafc",
  },

  sectionContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "2.5rem",
    color: "#1e3a8a",
    marginBottom: "3rem",
    position: "relative",
    display: "inline-block",
    paddingBottom: "1rem",
  },

  // EXPERIENCE
  experienceGrid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  },

  experienceCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    borderLeft: "4px solid #3b82f6",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "0.5rem",
  },

  expCompany: {
    color: "#1e3a8a",
    fontSize: "1.3rem",
    marginBottom: 0,
  },

  expPeriod: {
    color: "#64748b",
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
  },

  expPosition: {
    color: "#3b82f6",
    fontWeight: "600",
    marginBottom: "0.5rem",
    fontSize: "1.1rem",
  },

  expDescription: {
    color: "#475569",
    marginBottom: "1rem",
    lineHeight: "1.7",
  },

  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },

  techBadge: {
    background: "#dbeafe",
    color: "#1e40af",
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "500",
  },

  // SKILLS
  skillsGrid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },

  skillCategory: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
  },

  skillCategoryTitle: {
    color: "#1e3a8a",
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    fontWeight: "600",
  },

  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem",
  },

  skillTag: {
    background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    color: "white",
    padding: "0.6rem 1.2rem",
    borderRadius: "25px",
    fontSize: "0.95rem",
    fontWeight: "500",
  },

  // PROJECTS
  projectsGrid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  },

  projectCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    borderTop: "3px solid #3b82f6",
  },

  projectTitle: {
    color: "#1e3a8a",
    fontSize: "1.3rem",
    marginBottom: "0.8rem",
  },

  projectDescription: {
    color: "#475569",
    marginBottom: "1rem",
    lineHeight: "1.7",
  },

  projectTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
  },

  projectTag: {
    background: "#f1f5f9",
    color: "#1e3a8a",
    padding: "0.4rem 0.8rem",
    borderRadius: "15px",
    fontSize: "0.85rem",
    fontWeight: "500",
  },

  projectLink: {
    color: "#3b82f6",
    fontWeight: "600",
    marginTop: "1rem",
  },

  // CONTACT SECTION
  contactSection: {
    background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    color: "white",
    padding: "5rem 2rem",
  },

  contactDescription: {
    fontSize: "1.1rem",
    marginBottom: "3rem",
    opacity: 0.9,
    maxWidth: "700px",
  },

  contactGrid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    marginTop: "2rem",
  },

  contactItem: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "1.5rem",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  contactLabel: {
    marginBottom: "0.5rem",
    fontSize: "1.1rem",
    fontWeight: "600",
  },

  contactLink: {
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },

  // FOOTER
  footer: {
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "2rem",
  },
};

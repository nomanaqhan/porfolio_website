import './App.css'

function App() {
  const portfolioData = {
    name: 'Nomana Khan',
    role: 'Senior UI/UX Designer',
    location: 'Jubilee Town, Lahore',
    phone: '+92 336 4528681',
    email: 'nomanaqhan45@gmail.com',
    behance: 'https://www.behance.net/nomanaqhan',
    objective:
      'Creative and detail-oriented UI/UX Designer with two years of professional experience designing web and mobile applications. Skilled in user interface design, user experience strategy, wireframing, prototyping, and usability testing.',
    summary:
      'A dedicated and user-focused UI/UX Designer with experience creating intuitive, visually appealing, and user-centered digital experiences. Proficient in Figma and modern design practices, with strong design thinking and collaboration skills.',
    experience: {
      title: 'Senior UI/UX Designer',
      company: 'Experts Cloud, Lahore',
      period: 'November 2023 - Present',
      responsibilities: [
        'Lead end-to-end UI/UX design for web and mobile applications.',
        'Translate business requirements into user-centered design solutions.',
        'Create user flows, wireframes, prototypes, and high-fidelity interfaces using Figma.',
        'Define and maintain design systems for consistency and scalability.',
        'Collaborate with developers, product managers, and stakeholders.',
        'Conduct usability testing and improve designs based on insights.',
        'Mentor junior designers and review design quality standards.',
      ],
    },
    education: {
      degree: 'Bachelor of Arts (BA)',
      institute: 'Allama Iqbal Open University (AIOU)',
    },
    skills: [
      'Product Design',
      'UI Design & Redesign',
      'Mobile App UI Design',
      'Web Design',
      'Interaction Design',
      'Design System',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Material Design',
      'Figma',
      'Sketch',
      'Collaboration & Communication',
      'Project Management',
    ],
    portfolioProjects: [
      {
        title: 'Multi-Event Management Mobile App',
        url: 'https://www.behance.net/gallery/247630737/Multi-Event-Management-Mobile-App',
      },
      {
        title: 'Service Marketplace & Job Platform',
        url: 'https://www.behance.net/gallery/247628467/Service-Marketplace-Job-Platform',
      },
      {
        title: 'Speaker Engagement & Event Platform',
        url: 'https://www.behance.net/gallery/243437069/Speaker-Engagement-Event-Platform',
      },
      {
        title: 'Emotion-Aware Chat & Mental Wellness App',
        url: 'https://www.behance.net/gallery/247350057/Emotion-Aware-Chat-Mental-Wellness-App',
      },
      {
        title: 'E-Commerce Mobile App',
        url: 'https://www.behance.net/nomanaqhan',
      },
      {
        title: 'Modern HR Management Dashboard UI Design',
        url: 'https://www.behance.net/gallery/242686643/Modern-HR-Management-Dashboard-UI-Design',
      },
    ],
  }

  const fallbackPreview =
    'https://upload.wikimedia.org/wikipedia/commons/7/76/Behance_logo.svg'

  const getPreviewImage = (url) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`

  return (
    <>
      <header className="navbar">
        <div className="container nav-content">
          <div className="brand">{portfolioData.name}</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" id="about">
          <span className="badge">Available for UI/UX opportunities</span>
          <h1>{portfolioData.name}</h1>
          <p className="hero-subtitle">{portfolioData.role}</p>
          <p>{portfolioData.summary}</p>
          <p>{portfolioData.objective}</p>
          <div className="cta-row">
            <a className="btn primary" href={`mailto:${portfolioData.email}`}>
              Hire Me
            </a>
            <a className="btn" href={portfolioData.behance} target="_blank" rel="noreferrer">
              Behance Profile
            </a>
            <a className="btn" href="#contact">
              Contact Details
            </a>
          </div>
        </section>

        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="grid skills-grid">
            {portfolioData.skills.map((skill) => (
              <div className="skill-item" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio">
          <h2 className="section-title">Portfolio</h2>
          <div className="grid portfolio-grid">
            {portfolioData.portfolioProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <img
                  className="project-image"
                  src={getPreviewImage(project.url)}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = fallbackPreview
                    event.currentTarget.style.objectFit = 'contain'
                    event.currentTarget.style.padding = '22px'
                    event.currentTarget.style.background = '#000'
                  }}
                />
                <h3>{project.title}</h3>
                <p className="meta">UI/UX Case Study</p>
                <a className="btn primary project-btn" href={project.url} target="_blank" rel="noreferrer">
                  View on Behance
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience">
          <h2 className="section-title">Experience</h2>
          <div className="card">
            <h3>{portfolioData.experience.title}</h3>
            <p className="meta">
              {portfolioData.experience.company} | {portfolioData.experience.period}
            </p>
            <ul>
              {portfolioData.experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="education" className="education">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <h3>{portfolioData.education.degree}</h3>
            <p className="meta">{portfolioData.education.institute}</p>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="grid contact-grid">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}>{portfolioData.phone}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span>{portfolioData.location}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Behance</span>
              <a href={portfolioData.behance} target="_blank" rel="noreferrer">
                behance.net/nomanaqhan
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} {portfolioData.name} | UI/UX Portfolio
      </footer>
    </>
  )
}

export default App

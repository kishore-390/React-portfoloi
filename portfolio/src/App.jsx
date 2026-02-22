import './App.css'

function App() {
  const profileImage = '/IMG20260221104044.jpeg'
  const skills = [
    'HTML / CSS',
    'C Programming',
    'Web Development',
    'JavaScript',
    'Python',
    'Front End Development',
    'Database: MongoDB, SQL',
  ]

  const projects = [
    {
      title: 'Laptop Hub',
      description:
        'Developed a laptop store for beginners to choose the best laptops using HTML and CSS.',
    },
    {
      title: 'Campus Kart',
      description:
        'Developed a campus marketplace to sell used products inside the campus network using React, JavaScript, and MongoDB.',
    },
    {
      title: 'Smart Trafficing & Smart Parking',
      description: 'Created a smart trafficing and smart parking system using IoT components & yolov8 code & won 2ndpice in the inter college-hackthon.',
    },
  ]

  const education = [
    {
      degree: 'BSc - Software Systems',
      school: 'Kongu Engineering College, Perundurai, Erode',
      year: '2025 - 2028',
    },
    {
      degree: 'HSC',
      school: 'Navarasam Matric Hr. Sec. School, Palliyuthu, Erode',
      year: '2024 - 2025',
      extra: 'Percentage: 75%',
    },
    {
      degree: 'SSLC',
      school: 'Navarasam Matric Hr. Sec. School, Palliyuthu, Erode',
      year: '2022 - 2023',
    },
  ]

  const contactDetails = [
    {
      icon: '@',
      title: 'Kishoreki446@gmail.com',
      subtitle: 'Email me anytime',
      href: 'mailto:Kishoreki446@gmail.com',
    },
    {
      icon: '☎',
      title: '+91 8110803257',
      subtitle: 'Mon - Fri, 9am - 6pm',
      href: 'tel:+918110803257',
    },
    {
      icon: '⌖',
      title: 'Erode, Tamil Nadu',
      subtitle: 'Open to remote work',
    },
  ]

  return (
    <main className="portfolio-page">
      <header className="topbar">
        <h2 className="brand">Kishore's Portfolio</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero website-hero" id="about">
        <div className="hero-copy">
          <div>
            <h1>KISHORE</h1>
            <p className="objective-text">
              To pursue a challenging role where I can effectively utilize my academic knowledge and technical skills,
              while continuously improving my professional capabilities and contributing to the success of the
              organization.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button ghost" href="mailto:Kishoreki446@gmail.com">
                Hire Me
              </a>
            </div>
          </div>
        </div>
        <img
          src={profileImage}
          alt="Kishore profile"
          className="profile-photo"
          onError={(event) => {
            event.currentTarget.src = '/profile-photo.svg'
          }}
        />
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skill-tags">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.degree} className="education-card">
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                {item.extra ? <p>{item.extra}</p> : null}
              </div>
              <span>{item.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="activities">
        <h2>Co-Curricular Activities</h2>
        <ul className="list">
          <li>Participated in Poster Designing and Innovates event conducted at Kongu Engineering College.</li>
          <li>Participated in inter-department hackathon.</li>
        </ul>
      </section>

      <section className="section contact-section" id="contact">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind? Let&apos;s talk!</p>

        <div className="contact-layout">
          <div className="contact-left">
            <h3>Let&apos;s build something great together</h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            <div className="contact-info-list">
              {contactDetails.map((item) => (
                <article key={item.title} className="contact-info-item">
                  <span className="contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    {item.href ? <a href={item.href}>{item.title}</a> : <p className="plain-title">{item.title}</p>}
                    <p>{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Your Name" aria-label="Your Name" />
            <input type="email" placeholder="Your Email" aria-label="Your Email" />
            <input type="text" placeholder="Subject" aria-label="Subject" />
            <textarea placeholder="Your Message" aria-label="Your Message" rows="6" />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="reference-box">
          <h3>Reference</h3>
          <p className="reference-name">Dr. S. Parvathavarthini</p>
          <p>Professor, Kongu Engineering College</p>
          <p>Phone: +91 9789221179</p>
        </div>
      </section>
    </main>
  )
}

export default App

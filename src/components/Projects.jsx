import '../css/projects.css'


export default function Projects() {
  const projects = [
    {
      title: 'Networx',
      description: 'Backend APIs with MongoDB and Auth.',
      link: 'https://github.com/vitesh-reddy/Networx'
    },
    {
      title: 'Chasing Horizons',
      description: 'Travel dashboard with Node & MongoDB.',
      link: 'https://github.com/ROHINSAI/FFSD-sem4'
    },
    {
      title: 'Rhyno EV Project',
      description: 'Responsive EV spec website.',
      link: 'https://github.com/Meghana-Kuruva/RHYNO-EV__Project'
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <div className="tech-indicator"></div>
          <a
            href={p.link}
            className="project-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.title}
          </a>
          <p className="project-description">{p.description}</p>
        </div>
      ))}
    </section>
  );
}
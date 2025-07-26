import '../css/skills.css'

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">
        Technical Skills
      </h2>
      <ul className="skills-list">
        <li className="skills-item">
          <strong>Languages:</strong>
          <span className="skills-text"> C, C++, Java, Python, JavaScript</span>
        </li>
        <li className="skills-item">
          <strong>Frameworks:</strong>
          <span className="skills-text"> Node.js, Express.js, React.js</span>
        </li>
        <li className="skills-item">
          <strong>Tools:</strong>
          <span className="skills-text"> Git, GitHub, Postman</span>
        </li>
        <li className="skills-item">
          <strong>Databases:</strong>
          <span className="skills-text"> MySQL, MongoDB, PostgreSQL</span>
        </li>
        <li className="skills-item">
          <strong>Areas:</strong>
          <span className="skills-text"> Full Stack Development, Deep Learning</span>
        </li>
      </ul>
    </section>
  );
}

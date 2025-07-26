import '../css/header.css'
import profileImage from '../assets/megs.png';

export default function Header() {
  return (
    <section className="header-section">
      <img
  src={profileImage}
  alt="Profile"
  className="profile-image"
/>
      <h1 className="main-title">
        Meghana Kuruva
      </h1>
      <p className="subtitle">
        B.Tech CSE | Full Stack Developer | Deep Learning Enthusiast
      </p>
      <div className="social-links">
        <a
          href="mailto:meghana.k23@iiits.in"
          className="social-link"
        >
          Email
        </a>
        <a
          href="https://github.com/Meghana-Kuruva"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kuruva-meghana-51b004319/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}


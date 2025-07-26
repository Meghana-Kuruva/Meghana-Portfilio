import '../css/contact.css'


export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        Email:{' '}
        <a href="mailto:meghana.k23@iiits.in" className="contact-email">
          meghana.k23@iiits.in
        </a>
      </div>
      <div className="contact-info contact-phone">Phone: +91-8019202270</div>
    </section>
  );
}
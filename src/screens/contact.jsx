
import styles from './Contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <div className={styles.contactInfo}>
        We'd love to hear from you! Please reach out with any questions, feedback, or business inquiries.
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetail}>
          <FaPhoneAlt />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className={styles.contactDetail}>
          <FaEnvelope />
          <span>info@reactshop.com</span>
        </div>
        <div className={styles.contactDetail}>
          <FaMapMarkerAlt />
          <span>123 React Shop Ave, Suite 100, New York, NY</span>
        </div>
      </div>
      <form className={styles.contactForm}>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

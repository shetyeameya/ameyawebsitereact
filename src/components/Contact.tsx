import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Contact: React.FC = () => {
  const submit = (e: any) => {
    // e.preventdefault();
    alert("Message was sent!");
  };
  return (
    <section id="contact" className="contact-section py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-form">
            <h3>Send Me a Message</h3>

            <form className="form-layout" onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          <div>
            <div className="contact-info mb-8">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>
                    Jersey City, NJ
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:shetye.ameya.7@gmail.com">
                      shetye.ameya.7@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+11234567890">+1 (917) 324-2450</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <h3>Connect With Me</h3>

              <div className="social-links">
                <a
                  href="https://github.com/shetyeameya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shetyeameyasmu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/ameya.shetye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/ameyaandromeodairies?igsh=ZzFtM2hrdTl4a3Z5&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Instagram size={20} />
                </a>
              </div>

              <div className="quote-container">
                <p className="quote-text">
                  "Life is 10% what happens to us and 90% how we react to it."
                </p>
                <p className="quote-author">— Charles R. Swindoll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

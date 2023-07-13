import React from "react";
import "../styles/contact.css";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="main-subheading">
        <i className="fa-solid fa-ellipsis-vertical"></i> CONTACT
      </div>
      <div className="contact-container-content">
        <div className="contact-container-side">
          <div className="connect-content">Let's Connect and Collaborate!</div>
          <div className="contact-container-subheading">
            Whether you're interested in working together or have any inquiries,
            I'm here to help. Fill out the contact form to get in touch, or
            connect with me on{" "}
            <a
              href="https://linkedin.com/in/marko-milosavljevic"
              target="blank"
            >
              LinkedIn{" "}
            </a>{" "}
            for professional networking. To explore more about my work and stay
            updated, feel free to check out my other social media profiles
            listed below.
          </div>
          <div className="contact-container-socials">
            <div className="contact-social-item" title="LinkedIn profile.">
              <a
                href="https://linkedin.com/in/marko-milosavljevic"
                target="blank"
              >
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </div>
            <div className="contact-social-item" title="GitHub profile.">
              <a href="https://github.com/MarMil1" target="blank">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </div>
            <div className="contact-social-item" title="Codepen profile.">
              <a href="https://codepen.io/marmil1" target="blank">
                <i className="fa-brands fa-codepen fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-container-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

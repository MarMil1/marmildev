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
          <div className="connect-content">
            Would you like to connect and work together?
          </div>
          <div className="contact-container-subheading">
            Fill out the contact form, or conect with me on{" "}
            <a
              href="https://linkedin.com/in/marko-milosavljevic"
              target="blank"
            >
              LinkedIn.{" "}
            </a>
            If you'd like to find out more, take a look at my other socials
            below.
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

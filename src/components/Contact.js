import React from 'react'
import '../styles/contact.css'

export const Contact = () => {
  return (
    <section id="contact" className="contact section is-medium is-white has-text-centered">
        <div className="container is-narrow">
          <div className="work-title">
            Contact
          </div>
          <div className="columns is-multiline is-mobile">
            <div className="column">
              <div className="contact-idea">
                Send me an email or a message on LinkedIn.
              </div>
              <div className="columns align-items">
                <div className="column contact-item" title="Email from your current device.">
                  <a href="mailto:marmildev@gmail.com">
                    <i className="fa-solid fa-envelope fa-2x"></i>
                  </a>
                </div>
                <div className="column contact-item" title="Scan the QR code to send an email.">
                  <img src="https://chart.googleapis.com/chart?cht=qr&chl=MATMSG%3ATO%3Amarmildev%40gmail.com%3BSUB%3AHi%2C%20I'd%20like%20to%20connect%20with%20you.%3BBODY%3AHi%2C%20Marko.%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20my%20project.%0A%0APlease%20contact%20me%20back.%3B%3B&chs=180x180&choe=UTF-8&chld=L|2" rel='nofollow' alt='qr code' />
                </div>
                <div className="column contact-item" title="LinkedIn profile URL.">
                  <a href="https://linkedin.com/in/marko-milosavljevic" target="blank">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

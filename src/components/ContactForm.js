import React, { useRef, useState } from "react";
import "../styles/contactForm.css";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

  const snackbarSuccess = () => {
    const snackBarContainer = document.getElementById("snackbar-success");
    snackBarContainer.className = "show";
    setTimeout(function () {
      snackBarContainer.className = snackBarContainer.className.replace(
        "show",
        ""
      );
    }, 7000);
  };

  const snackbarFailure = () => {
    const snackBarContainer = document.getElementById("snackbar-failure");
    snackBarContainer.className = "show";
    setTimeout(function () {
      snackBarContainer.className = snackBarContainer.className.replace(
        "show",
        ""
      );
    }, 7000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        snackbarSuccess();
        console.log(result.text);
      },
      (error) => {
        snackbarFailure();
        console.log(error.text);
      }
    );

    // const result = {
    //   status: 200,
    //   text: "OK",
    // };

    // if (result.status === 200) {
    //   setUserName("");
    //   setUserEmail("");
    //   setUserMessage("");
    //   snackbarSuccess();
    //   console.log("Success");
    // } else {
    //   snackbarFailure();
    //   console.log("Error occured");
    // }
  };

  /**
   * It removes the "show" class from the snackbar success container,
   * which hides the snackbar
   */
  const dismissSnackbarSuccess = () => {
    const snackBarContainer = document.getElementById("snackbar-success");
    snackBarContainer.className = snackBarContainer.className.replace(
      "show",
      ""
    );
  };

  /**
   * It removes the "show" class from the snackbar failure container,
   * which hides the snackbar
   */
  const dismissSnackbarFailure = () => {
    const snackBarContainer = document.getElementById("snackbar-failure");
    snackBarContainer.className = snackBarContainer.className.replace(
      "show",
      ""
    );
  };

  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="user_name"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-right">
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          {userEmail && !userEmail.match(pattern) && (
            <>
              <span className="icon is-small is-right is-danger">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <p className="help is-danger">This email is invalid</p>
            </>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Your message"
            name="message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          ></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-rounded contact-form-btn"
            type="submit"
            value="Send"
          >
            Send
          </button>
        </div>
      </div>
      <div id="snackbar-success">
        <div className="snackbar-art">
          <i className="fa-solid fa-paper-plane"></i>
        </div>
        <div className="snackbar-content">
          <div className="snackbar-title">Message sent successfully!</div>
          <div className="snackbar-body">
            Thank you for visiting marmildev.tech!
          </div>
        </div>
        <div className="dismiss-snackbar" onClick={dismissSnackbarSuccess}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div id="snackbar-failure">
        <div className="snackbar-art">
          <i className="fa-solid fa-exclamation"></i>
        </div>
        <div className="snackbar-content">
          <div className="snackbar-title">An error has occurred.</div>
          <div className="snackbar-body">
            Sorry for the incovenience. Please try other form of contact.
          </div>
        </div>
        <div className="dismiss-snackbar" onClick={dismissSnackbarFailure}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </form>
  );
};

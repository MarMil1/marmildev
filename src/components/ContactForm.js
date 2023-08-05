import React, { useEffect, useRef, useState } from "react";
import "../styles/contactForm.css";
import emailjs from "@emailjs/browser";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

export const ContactForm = () => {
  const gaEventTracker = useAnalyticsEventTracker("Contact Form");
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
  const [greenCheckmark, setGreenCheckmark] = useState(false);
  const [testOpen, setTestOpen] = useState(false);
  const [userResponse, setUserResponse] = useState("");
  const [firstNum, setFirstNum] = useState(Math.floor(Math.random() * 10) + 1);
  const [secondNum, setSecondNum] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    const finalRes = () => {
      return firstNum + secondNum;
    };
    if (finalRes() === Number(userResponse)) {
      setGreenCheckmark(true);
    } else {
      setGreenCheckmark(false);
    }
  }, [testOpen, firstNum, secondNum, userResponse]);

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
    if (greenCheckmark) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          setUserName("");
          setUserEmail("");
          setUserMessage("");
          setTestOpen(false);
          setGreenCheckmark(false);
          setUserResponse("");
          setFirstNum(Math.floor(Math.random() * 10) + 1);
          setSecondNum(Math.floor(Math.random() * 10) + 1);
          snackbarSuccess();
          console.log(result.text);
        },
        (error) => {
          snackbarFailure();
          console.log(error.text);
        }
      );
    }

    // Commented below is used for testing email service locally
    // if (greenCheckmark) {
    //   const result = {
    //     status: 200,
    //     text: "OK",
    //   };

    //   if (result.status === 200) {
    //     setUserName("");
    //     setUserEmail("");
    //     setUserMessage("");
    //     setTestOpen(false);
    //     setGreenCheckmark(false);
    //     setUserResponse("");
    //     setFirstNum(Math.floor(Math.random() * 10));
    //     setSecondNum(Math.floor(Math.random() * 10));
    //     snackbarSuccess();
    //     console.log("Success");
    //   } else {
    //     snackbarFailure();
    //     console.log("Error occured");
    //   }
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

  const resetTest = () => {
    setFirstNum(Math.floor(Math.random() * 10) + 1);
    setSecondNum(Math.floor(Math.random() * 10) + 1);
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
      <div className="bot-test-container">
        <div className="check-container">
          <div onClick={() => setTestOpen(!testOpen)}>
            <input
              type="checkbox"
              id="check"
              name="check"
              required
              checked={greenCheckmark}
              onChange={() => setGreenCheckmark(false)}
            />
            <span className="checkmark"></span>
          </div>
          <div className="check-label">I am not a robot</div>
        </div>
        <div
          className={`checked-test-container ${
            testOpen ? `test-visible` : `test-invisible`
          }`}
        >
          <div className="task-controls-container">
            <div className="task-to-solve">
              {firstNum} + {secondNum}
            </div>
            <div className="reset-test" onClick={resetTest}>
              <i className="fa-solid fa-arrows-rotate"></i>
            </div>
            <div
              className="test-info-container"
              onClick={() => setIsInfoOpen(!isInfoOpen)}
            >
              ?
              <div
                className={`test-info ${
                  isInfoOpen ? `test-info-open` : `test-info-closed`
                }`}
              >
                Enter the correct sum of two numbers in the input box below.
              </div>
            </div>
          </div>

          <div className="solution-heading">
            To continue, enter your response.
          </div>
          <div>
            <input
              type="number"
              className="solution-input"
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            className={`contact-form-btn ${!greenCheckmark && `btn-disabled`}`}
            type="submit"
            value="Send"
            onClick={() => gaEventTracker("send_message")}
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

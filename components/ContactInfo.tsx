import React, { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast, ToastContainer } from "react-toastify";
import { toastDefaults } from "../global";
import { getLocalStateHelper } from "../utilities";
import { SubmitFormBody } from "../pages/api/submitForm";
import styles from "../styles/2-containers/contactInfo.module.sass";

export const ContactInfo: React.FC = () => {
  const initialState = {
    fromEmail: "",
    subject: "",
    formText: "",
    firstName: "",
    lastName: "",
    company: "",
  };
  const [inputState, setInputState] = useState(initialState);
  const { fromEmail, subject, formText, firstName, lastName, company } =
    inputState;
  const localStateHelper =
    getLocalStateHelper<typeof inputState>(setInputState);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitForm = useCallback(async () => {
    if (!executeRecaptcha) {
      throw new Error("Captcha not available");
    }

    const userCaptchaResponse = await executeRecaptcha("SubmitContactForm");

    const fetchAwaited = await fetch("/api/submitForm", {
      method: "post",
      body: JSON.stringify({
        userCaptchaResponse,
        ...inputState,
      } as SubmitFormBody),
    });
    if (fetchAwaited.status !== 200)
      throw new Error(`Received status ${fetchAwaited.status}`);
  }, [executeRecaptcha, inputState]);

  return (
    <section id={styles.contactInfo}>
      <ToastContainer {...toastDefaults} />

      <h2>Contact Information</h2>
      <a href="mailto:koser.david@gmail.com?subject = Interest In Your Resume&body = Message">
        <strong>Email : </strong> koser.david@gmail.com
      </a>

      <form
        id={styles.contactFormBody}
        onSubmit={async (event) => {
          event.preventDefault();
          if (!fromEmail || !subject || !formText) {
            toast.error(
              `The: "From", "Subject" and "Message Body" Fields are Required, Please Try Again :-)`
            );
          } else {
            try {
              await toast.promise(submitForm(), {
                pending: `Sending...`,
                success: `Thank you for contacting me! I'll try to reply within the next 48 hours.`,
                error: `Message not delivered, please try again or contact me directly at savisquirrel@gmail.com...`,
              });
              localStateHelper(initialState);
            } catch (err) {
              const errParsed =
                err instanceof Error ? err : new Error(JSON.stringify(err));
              console.error(errParsed);
            }
          }
        }}
      >
        <h3>Email Me!</h3>
        <div className={styles.inputBox}>
          <label className={styles.inputLabels} htmlFor="fromEmail">
            From
          </label>
          <input
            id="fromEmail"
            placeholder="(Required)"
            className={styles.contactFormInput}
            type="text"
            value={fromEmail}
            onChange={(e) => {
              localStateHelper({ fromEmail: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.inputLabels} htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            placeholder="(Required)"
            className={styles.contactFormInput}
            type="text"
            value={subject}
            onChange={(e) => {
              localStateHelper({ subject: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.inputLabels} htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            className={styles.contactFormInput}
            type="text"
            value={firstName}
            onChange={(e) => {
              localStateHelper({ firstName: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.inputLabels} htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            className={styles.contactFormInput}
            value={lastName}
            onChange={(e) => {
              localStateHelper({ lastName: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.inputLabels} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className={styles.contactFormInput}
            value={company}
            onChange={(e) => {
              localStateHelper({ company: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className={styles.inputBox}>
          <textarea
            placeholder="Message Body (Required)"
            id={styles.textArea}
            rows={9}
            value={formText}
            onChange={(e) => {
              localStateHelper({ formText: e.target.value });
            }}
          />
        </div>
        <button id={styles.sendButton}>Send</button>
      </form>
    </section>
  );
};

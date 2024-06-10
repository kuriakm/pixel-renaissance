import React, { useState } from "react";
import "../styles/contact.css";
import AboutWriter from "../components/about-writer";
import Socials from "../components/socials";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "89db3fed-7ffa-437b-a019-5b7be5aa1814");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was sent successfully!");
      event.target.reset();
    } else {
      setResult(
        "Sorry, there was an error when submitting your review. Please try again later."
      );
    }
  };

  return (
    <main id="main-content" className="columns">
      <section id="information" className="four">
        <section id="contact-page">
          <h2>Contact</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="txt-name">Name: </label>
              <input
                type="text"
                name="name"
                id="txt-name"
                placeholder="Enter your first and last name"
                required
                minLength={3}
              />
            </div>
            <div>
              <label htmlFor="txt-email">Email: </label>
              <input
                type="email"
                name="email"
                id="txt-email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="txt-com">
                Suggestions, Comments, Inquiries:{" "}
              </label>
              <textarea
                name="message"
                id="txt-com"
                placeholder="Enter your suggestions, comments, and/or, inquiries"
                required
                minLength={5}
              ></textarea>
            </div>
            <div id="btn-box">
              <button id="btn-submit">Submit</button>
            </div>
          </form>
          <span>{result}</span>
        </section>
        <Socials />
      </section>
      <AboutWriter />
    </main>
  );
};

export default Contact;
// Access key: 89db3fed-7ffa-437b-a019-5b7be5aa1814

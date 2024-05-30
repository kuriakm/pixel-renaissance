import React, { useState } from "react";
import "../styles/contact.css";
import AboutWriter from "../components/about-writer";

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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main id="main-content" className="columns">
      <section id="information" class="three">
        <section id="contact-page">
          <h2>Contact</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label for="txt-name">Name: </label>
              <input type="text" id="txt-name" />
            </div>
            <div>
              <label for="txt-email">Email: </label>
              <input type="text" id="txt-email" />
            </div>
            <div>
              <label for="txt-com">Suggestions, Comments, Inquiries: </label>
              <textarea for="txt-com"></textarea>
            </div>
            <button id="btn-submit">Submit</button>
          </form>
          <span>{result}</span>
        </section>
      </section>
      <AboutWriter />
    </main>
  );
};

export default Contact;
// Access key: 89db3fed-7ffa-437b-a019-5b7be5aa1814

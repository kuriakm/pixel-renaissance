import "../styles/socials.css";
import mastodon from "../images/socials/mastodon.svg";
import instagram from "../images/socials/instagram.svg";

const Socials = () => {
  return (
    <section id="contact-social">
      <h2>Social Media</h2>
      <div id="social-media" className="columns wrap three">
        <img src={mastodon} alt="Mastodon icon" />
        <img src={instagram} alt="Instagram icon" />
      </div>
      <section className="attribute">
        Icons by <a href="https://icons8.com">Icons8</a>
      </section>
    </section>
  );
};

export default Socials;

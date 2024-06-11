import "../styles/about-writer.css";
import aboutWriterPic from "../images/about/about-writer.jpg";

const AboutWriter = () => {
  return (
    <aside id="about-writer-box" className="one">
      <div>
        <img src={aboutWriterPic} alt="Cherry blossoms" id="about-pic" />
        <h3>About the Writer</h3>
        <p>
          Marshall is currently a rising senior studying Computer Information
          Systems with a concentration in Cybersecurity.
        </p>
        <p>
          Marshall began his college career as an Illustration major due to his
          strong love of art, but chose to pursue a degree in the field of
          computing. However, his interest in art has allowed him a unique
          perspective on the video games he plays, creating the foundation of
          Pixel Renaissance.
        </p>
        <p>
          He has been playing video games since he was a little kid and hasn't
          stopped since. The first game he remembers playing was Brave Fencer
          Musashi on the PS1, which cemented his interest in video games and the
          themes/motifs they entail.
        </p>
        <section className="attribute">
          <p>
            Image by{" "}
            <a href="https://pixabay.com/users/hans-2/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=324175">
              {" "}
              Hans{" "}
            </a>
            from{" "}
            <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=324175">
              Pixabay
            </a>
          </p>
        </section>
      </div>
    </aside>
  );
};

export default AboutWriter;

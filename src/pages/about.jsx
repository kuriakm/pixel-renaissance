import AboutWriter from "../components/about-writer";
import "../styles/about.css";

const About = () => {
  return (
    <main id="main-content" className="columns">
      <section id="information" className="three">
        <section id="about-page">
          <h2>About Pixel Renaissance</h2>
          <p>
            Pixel Renaissance was born out of three passions of mine: art, video
            games, and sociocultural analysis. I have always wanted a place
            where I could expound on my thoughts regarding the video games I
            played, especially when it came to the larger themes presented in
            them as well as how the art style influenced the overall playing
            experience.
          </p>
          <p>
            We also have a store page if you are interested in supporting our
            mission of providing thoughtful commentary and challenging
            preexisting notions about the video games you love.
          </p>
          <p>
            We are happy to have you here and hope that you will find a greater
            artistic and sociocultural appreciation for the media you choose to
            enjoy.
          </p>
          <p>
            Here is a video that explains more about why exploring these
            narratives is important:
          </p>
          <iframe
            src="https://www.youtube-nocookie.com/embed/kVFfh9_LmAs?si=ZSJX_R5cGwzb6k8e"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </section>
      <AboutWriter />
    </main>
  );
};

export default About;

import AboutWriter from "../components/about-writer";
import Slideshow from "../components/slideshow";
import StoreFeatured from "../components/store-featured";
import "../styles/styles.css";
const Home = () => {
  return (
    <main id="main-content" className="columns">
      <section id="information" className="four">
        <Slideshow />
        <StoreFeatured />
      </section>
      <AboutWriter />
    </main>
  );
};

export default Home;

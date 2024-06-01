import stickerThumb from "../images/store/sticker-thumb.png";
import stickerSm from "../images/store/sticker-sm.png";
import stickerMed from "../images/store/sticker-med.png";
import stickerLg from "../images/store/sticker-lg.png";
import "../styles/stickers.css";
import ReviewBox from "../components/reviewbox";

const Stickers = () => {
  return (
    <main id="main-content" className="columns">
      <section id="information" className="three">
        <section id="store-item-page">
          <h2>Pixel Renaissance Stickers</h2>
          <img
            id="store-thumb"
            src={stickerThumb}
            alt="Three different sized stickers of the Pixel Renaissance logo."
          />
          <section id="store-item-pics" className="columns wrap three">
            <section id="store-items" className="one">
              <img
                src={stickerSm}
                alt="Small version of the Pixel Renaissance logo sticker."
              />
            </section>
            <section id="store-items" className="one">
              <img
                src={stickerMed}
                alt="Medium version of the Pixel Renaissance logo sticker."
              />
            </section>
            <section id="store-items" className="one">
              <img
                src={stickerLg}
                alt="Large version of the Pixel Renaissance logo sticker."
              />
            </section>
          </section>
        </section>
      </section>
      <ReviewBox />
    </main>
  );
};
export default Stickers;

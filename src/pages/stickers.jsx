import stickerThumb from "../images/store/sticker-thumb.png";
import stickerSm from "../images/store/sticker-sm.png";
import stickerMed from "../images/store/sticker-med.png";
import stickerLg from "../images/store/sticker-lg.png";
import "../styles/stickers.css";
import ReviewBox from "../components/reviewbox";

/* TODO: Change this to be a general StoreItem page that pulls item name from path to populate page*/
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
          <h3>$5.99</h3>
          <h4>Logo by Marshall Kuriakose</h4>
          <p>
            These cute stickers are great to put on water bottles, laptops, and
            phone cases! We used vinyl plastic to create waterproof stickers
            that can endure repeated use.
          </p>
          <p>
            These sticker packs come with 30 total stickers (10 large, 10
            medium, and 10 small sized stickers).
          </p>
          <button id="btn-add">Add to Cart</button>
        </section>
      </section>
      <ReviewBox />
    </main>
  );
};
export default Stickers;

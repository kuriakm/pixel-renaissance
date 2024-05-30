import "../styles/store-featured.css";
import sticker from "../images/store/sticker-lg.png";
import mug from "../images/store/mug-thumb.png";
import pin from "../images/store/pin-thumb.png";

const StoreFeatured = () => {
  return (
    <div id="store-featured" className="columns wrap three">
      {/* Add link to sticker (store-item.jsx) */}
      <section id="store-items" className="one">
        <img src={sticker} alt="Sticker with Pixel Renaissance logo on it" />
        <h3>Pixel Renaissance Stickers</h3>
      </section>
      <section id="store-items" className="one">
        <img src={mug} alt="Mug with Pixel Renaissance logo on it" />
        <h3>Pixel Renaissance Mug</h3>
      </section>
      <section id="store-items" className="one">
        <img src={pin} alt="Pin with Pixel Renaissance logo on it" />
        <h3>Pixel Renaissance Pin</h3>
      </section>
    </div>
  );
};

export default StoreFeatured;

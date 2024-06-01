import "../styles/store-featured.css";
import { Link } from "react-router-dom";
import sticker from "../images/store/sticker-lg.png";
import mug from "../images/store/mug-thumb.png";
import pin from "../images/store/pin-thumb.png";

const StoreFeatured = () => {
  return (
    <div id="store-featured" className="columns wrap three">
      {/* TODO: Add link to sticker (store-item.jsx) */}
      <section id="store-items" className="one">
        <img src={sticker} alt="Sticker with Pixel Renaissance logo on it" />
        <h3>Pixel Renaissance Stickers</h3>
        <div id="btn-box">
          <button id="btn-add">
            <Link to="/stickers">Add to Cart</Link>
          </button>
        </div>
      </section>
      <section id="store-items" className="one">
        <img src={mug} alt="Mug with Pixel Renaissance logo on it" />
        <h3>Pixel Renaissance Mug</h3>
        <div id="btn-box">
          <button id="btn-add">Add to Cart</button>
        </div>
      </section>
      <section id="store-items" className="one">
        <img src={pin} alt="Pin with Pixel Renaissance logo on it" />
        <h3>Pixel Renaissance Pin</h3>
        <div id="btn-box">
          <button id="btn-add">Add to Cart</button>
        </div>
      </section>
    </div>
  );
};

export default StoreFeatured;

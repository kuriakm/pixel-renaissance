import StoreFeatured from "../components/store-featured";
import "../styles/store.css";
/* TODO: Fix storepage view */

const Store = () => {
  return (
    <main id="main-content" className="wrap">
      <section id="store-title" class="one">
        <h1>Store</h1>

        <div id="button-box" class="four">
          <button id="btn-apparel">Apparel</button>
          <button id="btn-dec">Decorations</button>
          <button id="btn-drink">Drinkware</button>
          <button id="btn-other">Other</button>
          <div id="store-sort-menu">
            {" "}
            <select name="sort-dropdown">
              <option value="" selected>
                Sort By Type
              </option>
              <option value="drinkware">Drinkware</option>
              <option value="decoration">Decoration</option>
              <option value="wearable">Wearable</option>
            </select>
          </div>
        </div>
      </section>
      <StoreFeatured />
    </main>
  );
};

export default Store;

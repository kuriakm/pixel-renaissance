import { useState } from "react";
import "../styles/slideshow.css";

const SlideshowDots = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const [index, setIndex] = useState(0);

  const dotSlide = (index) => {
    setIndex(index);
  };

  return (
    <div className="dot-box">
      <span className="dot" onClick={dotSlide(0)}></span>
      <span className="dot" onClick={dotSlide(1)}></span>
      <span className="dot" onClick={dotSlide(2)}></span>
    </div>
  );
};

export default SlideshowDots;

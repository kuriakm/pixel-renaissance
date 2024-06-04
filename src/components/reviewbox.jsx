import React, { useState, useEffect } from "react";
import axios from "axios";
import Review from "./review";
import "../styles/reviews.css";

const ReviewBox = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://pixel-renaissance-server.onrender.com/api/reviews"
      );
      setAllProducts(response.data);
    })();
  }, []);

  return (
    <aside id="review-box" className="one">
      {allProducts.map((product, index) => {
        if (product.item === "stickers") {
          return (
            <div key={`${product.item}${index}`}>
              {product.reviews.map((review) => {
                return (
                  <Review
                    key={review.reviewer}
                    item={review.item}
                    reviewer={review.reviewer}
                    content={review.content}
                    rating={review.rating}
                  />
                );
              })}
            </div>
          );
        }
        return <div></div>;
      })}
    </aside>
  );
};

export default ReviewBox;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Review from "./review";
import "../styles/reviews.css";
import AddReviewForm from "./addreview-form";

const ReviewBox = () => {
  const [allReviews, setAllReviews] = useState([]);

  const addReview = (review) => {
    setAllReviews((reviews) => [...allReviews, review]);
  };

  useEffect(() => {
    (async () => {
      /* TODO: Change to formal server link */
      const response = await axios.get(
        "https://pixel-renaissance-server.onrender.com/api/reviews"
      );
      setAllReviews(response.data);
    })();
  }, []);

  return (
    <aside id="review-box" className="one">
      <div id="review-container">
        {allReviews.map((review) => {
          if (review.item === "Pixel Renaissance Stickers") {
            return (
              <Review
                key={review._id}
                _id={review._id}
                reviewer={review.reviewer}
                content={review.content}
                rating={review.rating}
                item={review.item}
              />
            );
          }
          return <div></div>;
        })}
      </div>
      <AddReviewForm addReview={addReview} />
    </aside>
  );
};

export default ReviewBox;

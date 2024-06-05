import { useState } from "react";
import "../styles/reviews.css";

/* TODO: Finish edit dialog */
const Review = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [review, setReview] = useState(props);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const editReview = (review) => {
    setReview(review);
  };

  return (
    <div className="reviews">
      <div className="review-head">
        <h4>{review.reviewer}</h4>
      </div>
      <p>{review.content}</p>
      <div id="review-info">
        <a href="#" id="edit" onClick={openEditDialog}>
          &#9998;
        </a>
        <a href="#" id="remove">
          &#x2715;
        </a>
        <p className="rating">{review.rating}/5</p>
      </div>
    </div>
  );
};

export default Review;

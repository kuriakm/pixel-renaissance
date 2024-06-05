import { useState } from "react";
import "../styles/reviews.css";
import EditDialog from "./editreview-dialog";

/* TODO: Finish edit dialog */
const Review = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [review, setReview] = useState(props);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const editReview = (review) => {
    setReview(review);
  };

  return (
    <div className="reviews">
      {showEditDialog ? (
        <EditDialog
          closeDialog={closeEditDialog}
          editReview={editReview}
          key={review._id}
          _id={review._id}
          reviewer={review.reviewer}
          content={review.content}
          item={review.item}
          rating={review.rating}
        />
      ) : (
        ""
      )}
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

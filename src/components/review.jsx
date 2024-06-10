import { useState } from "react";
import "../styles/reviews.css";
import EditDialog from "./editreview-dialog";
import DeleteDialog from "./deletereview-dialog";

const Review = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [review, setReview] = useState(props);
  const [showReview, setShowReview] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const editReview = (review) => {
    setReview(review);
  };

  const hideReview = (review) => {
    setShowReview(false);
  };

  return (
    <>
      {showReview ? (
        <div>
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

          {showDeleteDialog ? (
            <DeleteDialog
              closeDialog={closeDeleteDialog}
              hideReview={hideReview}
              _id={review._id}
              item={review.item}
            />
          ) : (
            ""
          )}
          <div className="reviews">
            <div className="review-head">
              <h4>{review.reviewer}</h4>
            </div>
            <p>{review.content}</p>
            <div id="review-info">
              <div>
                <a href="#" id="edit" onClick={openEditDialog}>
                  &#9998;
                </a>
              </div>
              <div>
                <a href="#" id="remove" onClick={openDeleteDialog}>
                  &#x2715;
                </a>
              </div>

              <p className="rating">{review.rating}/5</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Review;

import "../styles/reviews.css";

const Review = (review) => {
  return (
    <div className="reviews">
      <div className="review-head">
        <h4>{review.reviewer}</h4>
      </div>
      <p>{review.content}</p>
      <p className="rating">{review.rating}/5</p>
    </div>
  );
};

export default Review;

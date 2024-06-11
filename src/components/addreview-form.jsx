import "../styles/addreview-form.css";
import React, { useState } from "react";

const AddReviewForm = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /* Add change to api here */
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Adding review...");
    const formData = new FormData(event.target);

    /* TODO: Change to formal server link */
    const response = await fetch(
      "https://pixel-renaissance-server.onrender.com/api/reviews",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.status === 200) {
      event.target.reset();
      setInputs({});
      setResult("Review added successfully!");
      props.addReview(await response.json());
      setTimeout(function () {
        setResult("");
      }, 5000);
    } else {
      console.log(response);
      setResult("There was an error adding your review", response.message);
    }
  };

  return (
    <div id="review-form-box">
      <h3 id="addreview-title">Add Review</h3>
      <form id="review-form" onSubmit={onSubmit}>
        <div id="review-part">
          <section className="columns">
            <p id="img-upload">
              <label htmlFor="image">Upload Profile Picture: </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
              />
            </p>
            <p id="img-prev-section">
              <img
                id="img-prev"
                src={
                  inputs.image != null ? URL.createObjectURL(inputs.image) : ""
                }
                alt=""
              />
            </p>
          </section>
          <label htmlFor="reviewer">Name: </label>
          <input
            type="text"
            id="reviewer"
            name="reviewer"
            value={inputs.reviewer || ""}
            onChange={handleChange}
            placeholder="Enter your name (last name optional)"
            required
            minLength="3"
          />
        </div>
        <div id="review-part">
          <label htmlFor="content">Review: </label>
          <textarea
            type="text"
            id="content"
            name="content"
            value={inputs.content || ""}
            onChange={handleChange}
            placeholder="Enter your review"
            required
            minLength="3"
          />
        </div>

        <div id="product-dropdown">
          <label htmlFor="item">Product: </label>
          <select name="item" value={inputs.item || ""} onChange={handleChange}>
            <option value="Pixel Renaissance Stickers">Stickers</option>
            <option value="Pixel Renaissance Mug">Mug</option>
            <option value="Pixel Renaissance Pin">Pin</option>
          </select>
        </div>
        <div id="rating-dropdown">
          <label htmlFor="rating">Rating: </label>
          <select
            name="rating"
            value={inputs.rating || ""}
            onChange={handleChange}
          >
            <option value="5">5</option>
            <option value="4.5">4.5</option>
            <option value="4">4</option>
            <option value="3.5">3.5</option>
            <option value="3">3</option>
            <option value="2.5">2.5</option>
            <option value="2">2</option>
            <option value="1.5">1.5</option>
            <option value="1">1</option>
          </select>
        </div>

        <div id="review-button-box">
          <button type="submit" id="btn-review">
            Submit Review
          </button>
        </div>

        <p id="result">{result}</p>
      </form>
    </div>
  );
};
export default AddReviewForm;

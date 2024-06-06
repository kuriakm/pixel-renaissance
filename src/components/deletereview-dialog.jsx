import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteReview = async (event) => {
    const response = await fetch(
      `https://pixel-renaissance-server.onrender.com/api/reviews/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Review successfully deleted");
      props.hideReview();
      setTimeout(function () {
        setResult("");
      }, 5000);
    } else {
      console.log(
        "There was an error deleting your review, please try again later."
      );
      setResult(response.message);
    }
    props.closeDialog();
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>
              Are you sure you want to delete your review for {props.item}?
            </h3>
            <section>
              <button onClick={deleteReview}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;

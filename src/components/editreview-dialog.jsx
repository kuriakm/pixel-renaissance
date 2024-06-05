import "../styles/dialog.css";
import React, { useState } from "react";

/* TODO: Finish edit dialog */
const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    reviewer: props.reviewer,
    content: props.content,
    rating: props.rating,
    item: props.item,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Editing review...");
    const formData = new FormData(event.target);

    const response = await fetch("http://localhost:3001/api/reviews", {
      method: "PUT",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Review successfully updated!");
      event.target.reset();
      props.editReview(await response.json());
    } else {
      console.log("There was an error updating your review", response);
      setResult(response.message);
    }
  };
};

import React from "react";
import getImageUrl from "../../imageHelper";

const ReviewDetails = ({ selectedReview }) => {
  
  if (!selectedReview) {
    return <p className="title is-5">Click on a card to get started</p>;
  }

  const { product, name, rating, email, date, review } = selectedReview;

  return (
    <>
      <figure className="image is-16by9" style={{ marginBottom: "5%" }}>
        <img
          src={getImageUrl(product.defaultProductVariant.images[0]).url()}
          alt={product.title}
        />
      </figure>
      <p className="title is-5">{product.title}</p>
      <p className="subtitle">{product.blurb.en}</p>
      <p className="subtitle">
        {name} said "<b>{review}</b>"
      </p>
      <p className="is-6">Rating: {rating} out of 10</p>
      <p className="subtitle is-6">
        Review provided by <a href={`mailto:${email}`}>{name}</a> on{" "}
        {new Date(date).toUTCString()}
      </p>
    </>
  );
};

export default ReviewDetails;

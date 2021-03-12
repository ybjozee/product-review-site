import React from "react";
import getImageUrl from "../../imageHelper";

const ReviewCard = ({ review, index, onClick, isSelected }) => {
  const { rating, name, title, product } = review;
  
  return (
    <div
      className="card"
      key={index}
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? "#e2e2e2" : "white",
        marginBottom: "5px",
      }}
    >
      <div className="card-content">
        <div className="columns">
          <div className="column is-narrow">
            <div className="media-left">
              <figure className="image is-96x96">
                <img
                  src={getImageUrl(
                    product.defaultProductVariant.images[0]
                  ).url()}
                  alt={product.title}
                />
              </figure>
            </div>
          </div>
          <div className="column">
            <div className="media-content">
              <p className="title is-4">{product.title}</p>
              <p className="subtitle is-5">{title}</p>
              <p className="is-6">Rating: {rating} out of 10</p>
              <p className="is-6">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

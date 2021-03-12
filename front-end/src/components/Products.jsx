import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import getImageUrl from '../imageHelper';

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          title, 
          blurb,
          defaultProductVariant
      }`
      )
      .then((data) => {
        setProducts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="columns is-multiline">
        {products &&
          products.map((product, index) => (
            <div className="column is-3" key={index}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={getImageUrl(
                        product.defaultProductVariant.images[0]
                      ).url()}
                      alt={product.title}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{product.title}</p>
                      <p className="subtitle is-6">
                        ${product.defaultProductVariant.price}
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    {product.blurb.en}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;

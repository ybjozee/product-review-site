import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import sanityClient from "../client";

const ProductReviewForm = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "product"]{_id, title}`)
      .then((products) => {
        setProducts(products);
      })
      .catch(console.error);
  }, []);

  const validProductValues = products.map(({ _id }) => _id);

  const validationSchema = Yup.object({
    product: Yup.string()
      .required("Please select a product")
      .oneOf(validProductValues),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });

  const initialValues = {
    _type: "productReview",
    name: "",
    email: "",
    title: "",
    review: "",
    rating: "",
    date: new Date(),
    wouldRecommend: false,
    product: "",
  };

  const onSubmit = (values) => {
    const { product } = values;
    const request = { ...values, product: { _ref: product } };
    sanityClient.create(request).then(() => {
      alert(`Review submitted successfully`);
    });
  };

  const productOptions = products.map(({ _id, title }, key) => (
    <option value={_id} key={key}>
      {title}
    </option>
  ));

  const renderError = (message) => <p className="help is-danger">{message}</p>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
          <div className="field">
            <label className="label" htmlFor="name">
              Full name
            </label>
            <div className="control">
              <Field
                name="name"
                type="text"
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name="name" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="control">
              <Field
                name="email"
                type="text"
                className="input"
                placeholder="Email address"
              />
              <ErrorMessage name="email" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="product">
              Product
            </label>
            <div className="control">
              <Field name="product" as="select" className="select is-fullwidth">
                <option value={""}>Select a product</option>
                {productOptions}
              </Field>
              <ErrorMessage name="product" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="title">
              Title
            </label>

            <div className="control">
              <Field
                name="title"
                type="text"
                className="input"
                placeholder="Title"
              />
              <ErrorMessage name="title" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="review">
              Review
            </label>

            <div className="control">
              <Field
                name="review"
                as="textarea"
                className="textarea"
                placeholder="Review"
              />
              <ErrorMessage name="review" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="rating">
              Rating
            </label>

            <div className="control">
              <Field
                name="rating"
                type="number"
                className="input"
                placeholder="Rating"
              />
              <ErrorMessage name="rating" render={renderError} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox label" htmlFor="wouldRecommend">
                <Field
                  name="wouldRecommend"
                  type="checkbox"
                  className="checkbox"
                />
                Would recommend
              </label>
            </div>
          </div>

          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ProductReviewForm;

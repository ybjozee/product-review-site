export default {
  name: "productReview",
  title: "Product Review",
  type: "document",
  fields: [
    {
      name: "product",
      type: "reference",
      to: { type: "product" },
    },
    {
      name: "title",
      type: "string",
      description: "Your review in less than 10 words",
    },
    {
      name: "name",
      type: "string",
      title:"Full name",
    },
    {
      name: "email",
      type: "string",
      title:"Email address"
    },
    {
      name: "rating",
      type: "number",
      description: "Rate the product out of 10",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "review",
      type: "text",
      description: "Your review in as many words as you can come up with",
    },
    {
      name: "wouldRecommend",
      title: "Would recommend to a friend",
      type: "boolean",
    },
  ],
};

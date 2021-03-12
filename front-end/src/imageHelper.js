import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./client";

const getImageUrl = (source) => {
  const builder = imageUrlBuilder(sanityClient);
  return builder.image(source);
};

export default getImageUrl;
import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: "INSERT_YOUR_PROJECT_ID_HERE",
  dataset: "production",
  // authenticated requests can't be cached so we have to set useCdn to false
  useCdn: false,
  token: "INSERT_YOUR_TOKEN_HERE",
});

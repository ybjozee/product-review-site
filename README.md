product-review-site
========================

This project is a reference application created primarily to explain 
form validation using Formik and Yup. Additionally, 
it shows how to integrate a React application with a Sanity CMS
and communicate via GROQ statements.

Requirements
------------

1. [Node Package Manager (NPM)](https://www.npmjs.com/get-npm)
2. [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)

Setting up the Project
------------

```bash

git clone https://github.com/ybjozee/product-review-site

cd product-review-site

```

Setting up the CMS
------------
If you already have a `projectId`:

```bash

cd back-end

sanity install

sanity start

```
- Insert `projectId` and `dataset` in `sanity.json`
- Navigate to `localhost:3333` to view Sanity Studio

If you _do not_ have a `projectId`:

```bash

cd back-end

sanity init

```

- Answer the following questions:
    * Create new project — Hit Enter. 
    * Your project name: — We can name it whatever we would like. Let’s use `back-end` for this project. 
    * Use the default dataset configuration? — The default dataset configuration has a public dataset named "production", let's stick with that. So type in "Y" and hit Enter. 
    * Project output path: — This will show us the path where our sanity project will live. The path should show the path that leads to this: `/product-review-site/back-end`. Hit Enter. 
    * Select project template: — Here we are going to choose E-commerce (schema + sample data). Using the arrow keys, navigate to that so it’s showing blue. Hit Enter once there.
    * Upload a sampling of products to go with your e-commerce schema: - (press Y)

- Run `sanity start`
- [Get robot token](https://www.sanity.io/docs/http-auth)
- Navigate to `localhost:3333` to view Sanity Studio

Setting up the React Application
------------
```bash

cd front-end
npm install
cp src/client.dist.js src/client.js

```

- Update `projectId` and `token` in `src/client.js`
- Run `npm start`
- Navigate to `localhost:3000`to view app

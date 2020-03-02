## REACT API

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7777d34-cebb-42b4-bfa5-16d6e2192125/deploy-status)](https://app.netlify.com/sites/react-cat-api/deploys)

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
</a>

Site: [REACT API](https://react-cat-api.netlify.com)

![REACT API](https://res.cloudinary.com/sirsuccess/image/upload/v1583113713/Simpu/REACT_API_MAIN_w1uzfo.png)

React application. Powered by React, Redux, redux-thunk, SASS, Axios React-js-pagination.

## Description
 a simple react application that allow users view LOTR characters and
cats. The project consist of pages:
1. The Home Page
2. The Cats Page
3. The LOTR Page
4. 404 page
5. Error page

## Features
- Unit testing
- Responsive Layout
- Search

## The Home Page
The page is made up of carousel. it allowed for navigation to the
cats and LOTR page

## The Cats Page
This page display a list of cat images, description and 
pagination. The data displayed is fetched from the Cats API ( https://docs.thecatapi.com ).
The cat image is displayed with the following description:
1. Breed name
2. Temperament
3. Life Span
4. Shedding Level
5. Dog Friendly
6. Child Friendly 
the data is gotten from the endpoint of the API:
( https://docs.thecatapi.com/api-reference/images/images-search )

![REACT API](https://res.cloudinary.com/sirsuccess/image/upload/v1583113713/Simpu/REACT_API_CAT_ujwtvp.png)

## The LOTR Page
The LOTR page displays Lord Of The Ring characters, description and Pagination. The data
is fetched from the Lord Of The Rings API
( https://the-one-api.herokuapp.com/documentation ).

![REACT API](https://res.cloudinary.com/sirsuccess/image/upload/v1583113712/Simpu/REACT_API_LOTR_uljern.png)   


# Run Application

## Available Scripts

In the project directory, you can run:

### `yarn || npm install`

to install all dependency

### `yarn start || npm start`

to run application

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

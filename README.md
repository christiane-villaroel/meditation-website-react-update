# MindFul - Meditation Website 2.0:

## Overview

### Primary Goal:

The Goal of this project is to improve upon my previous verion of the meditation website. In my previous version I made a single page website,
using HTML, CSS, Bootstrap, JavaScript and some JQuery. The Goal of this project is build out multiple pages and replicate other meditation e-commerce websites.

### Secondary Mindful Website Goal:

The Secondary goal of this website is to also inform the user about the benefits of practicing meditation to reduce stess and anxiety.

## Learning Objectives:

- Building an e-commerce website
- Breaking Down each Page into Separate Components in React
- Maintain Single Source of truth with Forms
- Using React Router to build multiple pages in React
- How to use Reacstrap Components to style and layout pages

### Updates:

#### 12/6/22

- Custom Fetch Hook:
  - Set up json-server to create fake server and created fetch request to server
  - Since fetch request is a side effect in react I used the useEffect Hook to tell react when to re-render when fetch request is made.
  - create a separate component just to make fetch request, further down the line I can update and use the custom hook to make fetch request's in other react components by importing <useFetch> component and passing the specific url end point as a parameter to the useFetch hook.

### 12/24/22

- Features Page Json Server Public Folder:
  - Moved Images/assets folders to public folder and corrected file path in mx.json file for each image to localhost:3000 followed by path to image.
  - Currently working on react strap card image display, to be responsive when display images on small screen.

### 12/26/22

- ## Header Component:
  - Added img tage with src to localhost3000 for logo.
- ## Feature Image:
  - Removed lg <Col> attribute and deleted css card width.
  - Added 90% width to .card-width className for max-width:1200px
- ## Footer:

  - Deleted CSS for <Footer>(Position Absolute,bottom 0), footer did not
    stay fixed to bottom of webpage for smaller screen width. Footer would move to center of the page
    when page height was smaller than the length.
    - Resolution: added display: flex, flex-direction: column to <app> parent container and
      flex:1 to <Footer> tag.

- ## Fetch Request Component:
- Add setTimeout() method inside body of useEffect method to mimick fetch request loading method. 3 second delay added to timer to render loading texts.

## 12/29/22

- ## Hompage Hardcoded Content Update:

  - Hard coded content data removed from <Homepage> component. Entered into mw.json file and used fetch request to retrieve data.

- ## Header Component Update:
  - Copy and pasted header content onto json file. Deleting hard coded content from Header.js Component.
  - Used fetch request to make a GET request for header content data.

## 01/08/23

- ## About Us Page Update:

  - Content added to About us page with mission statement and title.
  - Need to add testimonial with bloquote to bottom of page.
  - JSon server update with about us page content.
  - NPM dateFormat installed - use to fomate date of customer reviews.

  ## 01/09/23

  - ## About Us Page Update:
  - Could not use custom useFetch Hook to make multiple calls for aboutUs content and testimonials.
    - ### Solution:
      - Researched and found article on how to use Promise.all() to make multiple fetch calls
      - Article Source: [Medium](https://medium.com/@jdhawks/make-fetch-s-happen-5022fcc2ddae) - Author Joshua Hawks

  ## 2/16/23

  - ## Router and File Path Updates:
  - Added gh-pages to host website. Due to this change image file path's needed to be updated from `localhost:3000`
    to 'http://localhost:3000/christiane-villaroel/meditation-website-react-update/' with the file path to the assets folder appended
    to the end.
  - ## Router GH-Pages issue:
    -- GitHub pages would render a blank page when trying to view website, could not make to connection to react app.
    -- Solution found on stack overFlow to change React BrowserRouter to HashRouter instead.
    ## UseFetch Update:
    -- Deleted useTimeout() method to make fetch request load faster
    -- I used useTimeout to delay the fetch request in order to view the loading component render. However now that this has been hosted on GH-pages, there is no need to still use useTimeout().

  ## 2/17/23

  - ## Hosting JSON Server:
  - Trying to host json file on GitHub pages. I used JSON Sever to create a fake
    REST API Locally. However now that I hosted this website on GitHub, the client side of the site can't make fetch requests to JSON Server locally.
  -
  - Sources used to update repo to make calls to db.json file:
    - [MyJSONSever](https://my-json-server.typicode.com/)
    - [DEV](https://dev.to/nikita_guliaev/deploying-create-react-app-with-json-server-as-backend-to-github-3pp9)- Author Nikita Guliaev

  ## 2/20/23

  - ## Hosting JSON Server Update:
  - Created a Heroku Account and push project onto Heroku to host JSON server.
  - baseUrl updated to fetch from Heroku repo instead of github pages repo.
    - Backend [Server] : Hosted on Heroku
    - Front End [Client] : Hosted on GitHub

## 2/25/23

- ## WebHosting on Heroku:
- both Backend and FrontEnd will be hosted Heroku
- Live Link: https://meditation-website-react.herokuapp.com/
  ### Sources for how to Deploy:
  - [DEV](https://dev.to/yongchanghe/deploy-react-app-with-json-server-on-heroku-59ak)- Author: Yongchang He

## 3/8/2023

## Difficulties Faced:

- Deployment Issues on Heroku:
  - After deploying to Heroku the herku link would only loady a blank page. After inspecting the console through chrome dev tools this message appeared onto the console
    > "Refused to apply style from 'https://meditation-website-react.herokuapp.com/meditation-website-react-update/static/css/main.e0496164.css'  
    > because its MIME type ('application/json') is not a supported stylesheet MIME type, and strict MIME checking is enabled."

### Solution:

- After search onling and posting to web dev forums, the problem was how the index.html was linked to the minified files for the main.js or css. Instead it was due to an issue with deploying React with Json-Server as the backend database. the Server.js file was not routing heroku to the correct build folder and I needed to install the Express framework and Path modules.
- Updating the server.js file by importing both modules and making a get function with the file path to the json file as the first parameter, along with the middleware and router.
- Lastly I had to remove the "homepage" from my package.json file.
- **Links for solution**:

  - [stackoverflow](https://stackoverflow.com/questions/63122706/how-to-deploy-reactjs-app-with-json-server)
  - [stackoverflow](https://stackoverflow.com/questions/61430193/react-uncaught-syntaxerror-unexpected-token-and-manifest-line-1-column)

  ## 3/9/2023

  ## Difficulties Faced:

  - Running Json-Server[backend] parallel to React-scripts.
    - Locally I would have to two separate terminals open, one to start the front-end react script, using npm
      and another to start the back end script, using npx.
    - However When the site is deployed only the react script is run due to the fact that the scripts command in the package.json file only has "react scripts" in the "start" command.

### Solution:

- Download concurrently to enable multiple commands to run "concurrently"
- Alter package.json scripts to the following:
  `"start": "concurrently \"npm run server\" \"npm run client\"",`

  - heroku will then read the start script command and run the command specified in the server and client scripts which are :

  ```
  "server": " npx json-server --watch data/db.json --port 8000",
  "client": "react-scripts start",

  ```

- **Links for Solution**:
  - [stackoverflow](https://stackoverflow.com/questions/74145750/npm-start-json-server-in-background)
  - [bobbyhadz](https://bobbyhadz.com/blog/not-recognized-as-internal-or-external-command-concurrently#update-your-path-environment-variable)
  - [stackoverflow](https://stackoverflow.com/questions/64570048/how-to-run-node-js-and-react)
  - [npm](https://www.npmjs.com/package/concurrently)

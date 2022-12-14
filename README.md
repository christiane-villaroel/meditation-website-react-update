# MindFul - Meditation Website 2.0:

## Overview

### Primary Goal:

The Goal of this project is to improve upon my previous verion of the meditation website. In my previous version I made a single page website,
using HTML, CSS, Bootstrap, JavaScript and some JQuery. The Goal of this project is build out multiple pages and replicate other meditation e-commerce websites.

### Secondary Mindful Website Goal:

The Secondary goal of this website is to also inform the user about the benefits of practicing meditation to reduce stess and anxiety.

## Learnin Objectives:

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

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
